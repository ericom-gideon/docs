page_title: What Happens and What Gets Built on a Rails App Deployment
page_author: Brittany Martin
page_description: Knowledge base article to teach users what we build and what happens on a rails app deployment
page_keywords: rails server deployment facts  

## What happens on an app deployment

##### Building infrastructure

First up we build the infrastructure in the region you specified. Your servers are virtual machines which sit on Ninefold’s hardware. These servers are much the same as the virtual machines you can spin up yourself, they’re just set up with a customized template. This template has been crafted specifically for deploying your Ruby on Rails app. We are keen to ensure your app shines and performs well.

As well as your servers, we’ll set up a load balancer for you. Yes! Your very own load balancer. This means there’s no routing mesh to contend with under load and no sharing your load balancer with noisy neighbours.

##### Deploying app

Once your servers have started, the real magic begins. Your code will get pulled to your app servers automatically from your Git repo. No need to set up another remote to push to — Ninefold will grab it from the repository that you specified.

Your source code will get deployed to your app servers, which will be set up with the version of Ruby you chose. We don’t use RVM or rbenv or any of that – Ninefold maintains packages of the latest versions of Ruby to make sure you’re always up to date.

As this is happening, your DB server is also being configured. A database is set up and permissions and passwords are stored so that we can generate a database.yml file for your application.

Once all the software is in the right place, we run your migrations and seed the database (assuming you’ve got data in your seeds.rb). We’ll also compile your assets (in the same environment as your application is served from to ensure you don’t have any unexpected issues).

Your inital deployment will be longer (up to 30 minutes) but subsequent redeploys will be much faster. 

Once that’s all done, you’re good to go. Your app is set up and running on Ninefold.

#### What gets built 

* All servers are provisioned with a unique public IP address, used for remote connectivity.

* An additional public IP address is provisioned on a local (region specific) load balancer, configured to direct web traffic to your application server
