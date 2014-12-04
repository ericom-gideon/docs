page_title: Setup: Unicorn
page_author: Brittany Martin
page_description: Knowledge base article to instruct users on how enable Unicorn as their app server
page_keywords: app server unicorn nginx procfile deployment memory

## Setup: Unicorn

#### Overview

Now that Ninefold supports Nginx, you can deploy Rails apps with the [Unicorn](https://github.com/blog/517-unicorn) app server. Unicorn is an HTTP server for Ruby, similar to Mongrel or Thin. It uses Mongrel’s Ragel HTTP parser but has a dramatically different architecture and philosophy.

Unicorn will reap and restart workers that die from broken apps. There is no need to manage multiple processes or ports yourself. Unicorn can spawn and manage any number of worker processes chosen. It's a great choice for robust, production-grade Rails apps.

#### How to Setup: Before Deployment

__Unicorn Gem__

First, add the unicorn gem to your Gemfile:

	 gem 'unicorn'

Be sure to bundle locally.

__Unicorn.rb__

Create a config file: __config/unicorn.rb__. For a standard deployment, we recommend the following settings:

	# config/unicorn.rb
	worker_processes Integer(ENV["WEB_CONCURRENCY"] || 3)
	timeout 15
	preload_app true

	before_fork do |server, worker|
  	Signal.trap 'TERM' do
    	puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    	Process.kill 'QUIT', Process.pid
 	end

  	defined?(ActiveRecord::Base) and
    	ActiveRecord::Base.connection.disconnect!
	end

	after_fork do |server, worker|
  		Signal.trap 'TERM' do
    		puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
  	end

  	defined?(ActiveRecord::Base) and
    	ActiveRecord::Base.establish_connection
	end

__Procfile__

Ninefold utilizes Foreman so you will need to add a [Procfile](http://help.ninefold.com/apps/what_is_a_procfile/) to your app. 

Ninefold has always asked for a Procfile to manage worker processes but now we will recognize web processes.

For Unicorn, you will want a line close to this:

	web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb

During deployment, on page __3 Details__, Ninefold will ask for your Procfile. Time to deploy!

***
If you do not configure Unicorn correctly, Ninefold will automatically setup your app up with Thin.
***

#### How to Setup: Post Deployment

__Already Using Another Nginx App Server__

You can change your app server at any time by changing your Procfile (and code configuration with your app), committing and redeploying on Ninefold.

__Enable A New App Server__

Follow the setup instructions for your app and then go to the __Configuration__ tab to enable choosing your app server with your Procfile. Finish off with a redeploy.

***
Like initial deployment, if you do not configure Unicorn correctly, Ninefold will automatically setup your app up with Thin.
***

#### Memory Management

By choosing Unicorn as your app server, you are taking on the responsibility of managing the app's memory. From the config file, pay special attention to this line:

	worker_processes Integer(ENV["WEB_CONCURRENCY"] || 3)

This means that you can set the __WEB_CONCURRENCY__ as an env var during __Step 3__ of the app's deployment or under the __Configuration__ tab of the app post-deployment. If the __WEB_CONCURRENCY__ is not set, Unicorn will default to __3__. Of course, you can change that to any sane number that you like.

Ninefold highly recommends utilizing a tool like [New Relic](http://newrelic.com/) to manage your memory usage and to determine the best concurrency settings for the app.

#### Additional Information

Additional information about Unicorn can be found on the official [homepage](http://unicorn.bogomips.org/).
