page_title:Diaspora
page_description: Knowledge base article to instruct users on how to deploy Diaspora on Ninefold
page_keywords: Diaspora Rails Guide Social 

## Deploy Diaspora

#### Why is Diaspora awesome?

Diaspora is a nonprofit, user-owned, distributed social network that is based upon the free Diaspora Rails software. Diaspora consists of a group of independently owned nodes (called pods) which interoperate to form the social network. Since the software is not owned by one person or entity, developers can avoid features they don’t want - like advertising - when setting up their own social network. Diaspora users can even download all their images and text that has been uploaded at any time. 

#### How to setup

Step 1: Fork Diaspora and clone your fork to your local machine. It will take a few minutes - it is quite the download. 

Step 2: Navigate to your new folder and open it with the editor of your choice.

Step 3: Diaspora currently runs on ruby version 2.0.0-p451. You want to make sure .ruby-version file is set to 2.0.0-p451. Using a ruby version manager, like RVM, or RBENV you can be sure your local version is set the right version of Ruby.
 
Step 4: You will need to switch the gemfile.lock to Postgres.
	
	$ DB=postgres bundle
	$ git add Gemfile.lock
	$ git commit -m "switch Gemfile.lock to pg exclusively"

Step 5: Let’s finish configuring your Diaspora pod to use Postgres by adding the ‘pg’ gem to your gemfile. Be sure to bundle install locally!

	$ gem ‘pg’

Step 6: Make changes to diaspora.yml.example. This is a massive file! Whoa! This is because it's the central file for all of your configuration. 

The creators of Diaspora have done a wonderful job documenting exactly what you need with their comments in the file. There are a lot of things that need your attention but here are the key ones for your initial deployment on Ninefold: 

__Server__

  	server: ## Section
    	## The port on which the appserver should listen
    	port: 3000

    	## The environment in which the server should be started by default.
    	rails_environment: 'production'

__Settings__

  	## General settings
  	settings: ## Section

    	## The name of your pod displayed in various locations,
   	 	## including the header.
    	pod_name: "Ninefold"

    	## Set this to false to prevent people from signing up for your pod
    	## without an invitation. Note that this needs to be true even for
    	## the first registration (you).
        enable_registrations: true
        
__SSL__ 

Ninefold uses Ubuntu on the virtual machine your app is deployed to. 

    	## Debian, Ubuntu, Archlinux, Gentoo (package ca-certificates)
    	certificate_authorities: '/etc/ssl/certs/ca-certificates.crt'

__Redis__

Ninefold sets the url of Redis in an environment variable `REDIS_URL`. Set the `redis` setting to this so that Diaspora processes background jobs.

	## URL for a remote Redis (default=localhost)
	## Don't forget to restrict IP access if you uncomment these!
	redis: ENV['REDIS_URL']

_Note: Make sure you are putting in your sensitive variables, like s3, in this format ENV['S3_SECRET']. Open a separate text file and add your actual secret keys into it. These will come into play when you deploy on to Ninefold._ __Warning: don’t EVER keep this file in your git repo.__

__Foreman__

Diaspora will give you a .foreman file that will conflict with Ninefold. Please find the .foreman file in your app (it will be one of the items in the root directory) and rename it to __.foreman.example__. 
 
Step 7: Create a database.yml in the config directory. 

Since Ninefold loves (and supports PostgreSQL), here is a recommended setup for your database.yml (but feel free to bring your own database instead!). 

_Note: You technically don’t need a database.yml file to run in production with Ninefold but if you want to test locally (please please do), you’ll need it._ 

__Example database.yml__ 

	development:
  	 adapter: postgresql
  	 database: diaspora_dev
  	 host: 127.0.0.1
  	 pool: 5
  	 timeout: 5000

	test:
  	 adapter: postgresql
  	 database: diaspora_test
  	 host: 127.0.0.1
  	 pool: 5
  	 timeout: 5000

Step 8: As we always suggest at Ninefold, give your Diaspora Pod a go by running

	$ RAILS_ENV=production rails s

    If you see your pod on localhost, you are ready to deploy to Ninefold!

Step 9: Commit your changes back up to your forked repo. Let’s deploy to Ninefold!

Step 10: Follow the instructions on how to [deploy an app on Ninefold](http://www.ninefold.com/docs/apps/deploy). We recommend that you separate your DB on to a separate server so you can easily scale your pod. Remember that text file of your secret keys? Make sure to add those into your environmental variables in Step 3 of deployment (remember keep those safe vs. ever adding to your repo). 

Step 11: Also in Step 3, you will need to add a line in your “After Migrations’ window during deployment so Ninefold can read all of the wonderful configuration you made in your diaspora.yml.example. 

	mv config/diaspora.yml.example config/diaspora.yml

Step 12: One tricky thing: your first deploy is going to fail. This is because you need to enable self signed SSL for your Diaspora pod. You do this by going into Ninefold app, click on the app, choosing Configuration, enable SSL and choose Use a self-signed certificate. Trigger a redeploy. 

#### Wrap-up

Now you’re all set to customize your pod with whatever you’d like. Graphics, images, seed users, you name it! 
