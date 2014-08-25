page_title:       Setting and Changing Your App's Configuration and Infrastructure
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users on how they can change their apps configuration and infrastructure after deployment
page_keywords:    infrastructure configuration add-ons servers size rails change

## Setting and Changing Your App Configuration and Infrastructure

Consider the infrastructure and configuration the Superman and Batman of your Justice League Rails app. You know, the essentials parts for success.

#### Setting Configuration During Deployment

Inital step when deploying your app to Ninefold is configuring your app.  Here, you are given the opportunity to customize some aspects of your deployment:

__Name Your App:__

The default name for your app is the repository followed by the branch, but you can change this to whatever you like.  This will also be the subdomain in the link to your app.  For example, if you deploy an app form repository example and branch master, your URL will be examplemasterxxxx.ninefold-apps.com.

__Software Stack__

Ruby version should be pretty self-explanatory.   We do some checks to see if we can automatically populate this field with the correct version, but you should make sure your app is compatible with the selected version before deploying.

Environment variables can also be set in this step.  By default, we provide the RAILS_ENV variable preset to production, but this can be changed to reflect any environment you have specified in your app.  We also provide a unique SECRET_TOKEN.  This is randomly generated when you get to this page and can be used for whatever you like.  You can also change it to use your own secret token if you have one or you can remove it completely.  This is also the place to put any private environment variables you need to set that you wouldn't typically commit as part of configuration (an example being APIs).  

__Add-ons__

These fields will auto-populate if you have the services set up in your app and will work out of the box.  We check to see if you're running Memcached and New Relic. If you would like to add these to your infrastructure, and then add the services to your repository later, that's okay, too.

__Additional Deployment Commands__

You can run commands from the command line of your app server(s) from here in the same format as if you were running the command in Bash. 

#### Changing/Viewing Configuration for Your Deployed App

After your app has successfully deployed, you can change your configuration whenever you like under Your App > __Configuration__ tab. 

* Current Settings
* Deployment Triggers
* Environment variables

If you change any of these settings, be prepared to redeploy for these changes to take affect.  
 
-------------

#### Setting Infrastructure During Deployment

The inital infrastructure for your app is chosen in __Step 3__ of the deploy process. 

The default setting is to have your app and database reside on separate servers. This allows for your app to be scaled vertically or horizontally very easily through the Portal interface. All server types have a root disk size of 20GB.

__Web Server__

The web server is your actual Rails application. Only one app server is created during first deployment. App server sizes can go up to 24GB RAM with 8 vCPU, however if you are on the 30-day trial period, the higher options may not be available.

__Database Server__

Ninefold supports Postgres for standard Rails deployments. If you’d like to create an app without the Postgres database server affixed, please uncheck this box. This is an excellent option if you have your database hosted externally.

If you’re looking to create a small development environment, there is an option to have your app and database reside on the same server. Just unclick “Create a dedicated Postgres server” for this option.

Similar to the Web server, the database server size can go up to 24GB RAM with 8 vCPU, but may be limited during the trial period. 

Database Size by default is set to 25GB, but can go up to 1500GB. This can be resized at any time in the Portal, under the Database tab.

__Worker Server__

If you’d like a background worker for your application, please check this box. Redis will be enabled for your app server and is free of charge. There are times that you may need a completely separate worker server. This option is great for apps that need to handle a lot of background jobs. Choose the server size you need and Redis will be enabled for that server.

__Recommended Infrastructure__

If you want some pointers on sizing, please feel free to chat up the fabulous Ninefold Support. Tell us what your app does, if you are using a CDN and how many users you expect on the site at once. 

#### Changing/Viewing Infrastructure for Your Deployed App 

After your app has successfully deployed, you can change your infrastructure whenever you like.  

__Horizontally__

_Scaling Existing Server Size Up or Down_

With any setup you choose, you can scale your app servers outwards (unless you chose the biggest one at 24GB!). 

All you need to do is go to the __Infrastructure__ tab, click _Edit_, choose your new size for the server of your choice, click __Save__ and then redeploy. 

__Vertically__

_Adding/Reducing Servers of the Same Type that Exist Already_

That's easy. All you need to do is go to the __Infrastructure__ tab, click _Edit_, choose the amount of servers of the right type, click __Save__ and then redeploy. We'll copy the existing server into new ones (or take ones out). The load balancer will be updated to send traffic to the correct servers. 

_Adding Servers of a Different Type_

Let's break this down with an example: say your app now needs a worker server now. In this case, you'll need to deploy another app that includes the worker server. 

_Breaking Apart a Combo Box (Web + DB + Worker)_

Often, developers will deploy a combo box to limit the use of resources. As your 'Uber for bodyguards' scales out, it will make sense to break apart your web, db and worker so that it is easy to scale both horizontally and vertically in the future. This requires a deployment of a new app to make this fundamental infrastructure change. 

------

Any further questions can be directed to our LiveChat below, or you are welcome to log a ticket in the Ninefold Portal.





