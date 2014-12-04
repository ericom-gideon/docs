page_title: What is a Procfile
page_author: Brittany Martin and Risa
page_description: Knowledge base article to instruct users on how to add a Procfile to their Rails app
page_keywords: procfile worker foreman rails

## Setting up your Procfile

A Procfile is a textfile named Procfile placed in the root of your application, that lists the process types in an application.

On Ninefold, you can define an app server to be run. For apps that want to run run a worker, you will need to define your process type.

#### How do I make a Procfile?

An example Procfile looks like this and it goes in to your Rails app's root directory along with your Gemfile and Rakefile.

    web: bundle exec thin start -p $PORT
    worker: bundle exec rake jobs:work    
    scheduler: bundle exec rake resque:work QUEUE=*

#### Procfile process types

__Web__

Web processes defined in your Procfile can start your servers such as Thin, Unicorn, and Puma on the Nginx web server.  

On Ninefold, this means that you can choose the type of app server you'd like to use. In the deploy wizard, choose ___Run web server with Procfile___ during the 3rd step of the Deployment wizard. By default, Nginx/Thin will run.

***
Note: Ninefold will insert `web: bundle exec thin start -p $PORT` process to the Procfile. Don't worry. If a Procfile doesn't exist, we'll create it for you. And we won't override your other processes.
***

For more information about each of these servers click on the links below:  

* [Thin](thin.md)
* [Unicorn](unicorn.md)
* [Puma](puma.md)

__Workers__

For worker processes like [delayed_job](https://github.com/collectiveidea/delayed_job), [Resque](https://github.com/resque/resque) and [Sidekiq](https://github.com/mperham/sidekiq), you will need to configure those within your app following their docs.

You will need to add the following line to your Procfile:

	worker: bundle exec rake jobs:work

Your Procfile, combined with us running Foreman for you, will trigger those jobs when the app is deployed.

#### What NOT to add to your Procfile

We manage your Redis instances for you. Do not include lines like:

	redis: redis-server redis.conf

It may wreak havoc on your processes. Let Ninefold handle that for ya!

#### Logging

If you deploy a worker on Ninefold and want to watch the logs for jobs that are being processed, you can view them in the __worker__ logs on the __Logs__ tab.

#### Are Procfiles only used for the Ninefold app deploy process?

Procfiles came into existence with the gem Foreman, written by David Dollar. More information can be found in the following article: [Procfiles by David Dollar](http://blog.daviddollar.org/2011/05/06/introducing-foreman.html).
