page_title: What is a Procfile
page_author: Brittany Martin
page_description: Knowledge base article to instruct users on how to add a Procfile to their Rails app
page_keywords: procfile worker foreman rails

## Setting up your Procfile

A Procfile is a textfile named Procfile placed in the root of your application, that lists the process types in an application.

For more sophisticated apps that want to run run a worker, you will need to define your process type.

#### How do I make a Procfile?

An example Procfile looks like this and it goes in to your Rails app's root directory along with your Gemfile and Rakefile.

  scheduler: bundle exec rake resque:work QUEUE=*

  worker: bundle exec rake resque:scheduler QUEUE=*

#### Procfile additions

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
