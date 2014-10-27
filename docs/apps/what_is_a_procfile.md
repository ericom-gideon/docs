page_title: What is a Procfile
page_author: Brittany Martin
page_description: Knowledge base article to instruct users on how to add a Procfile to their Rails app 
page_keywords: procfile worker foreman rails 

## Procfile + Workers on Ninefold

A Procfile is a textfile named Procfile placed in the root of your application, that lists the process types in an application. 

For more sophisticated apps that want to run run a worker, you will need to define your process type.

### Procfile additions

For worker processes like [delayed_job](https://github.com/collectiveidea/delayed_job), [Resque](https://github.com/resque/resque) and [Sidekiq](https://github.com/mperham/sidekiq), you will need to configure those within your app following their docs. 

You will need to add the following line to your Procfile:

	worker: bundle exec rake jobs:work

Your Procfile, combined with us running Foreman for you, will trigger those jobs when the app is deployed. 

### What NOT to add to your Procfile

We manage your web and Redis instances for you. Do not include lines like:

	web: rails s 
	redis: redis-server redis.conf

It may wreak havoc on your processes. Let Ninefold handle that for ya!

### Logging

If you deploy a Worker on Ninefold and want to watch the logs for jobs that are being processed, you can view them in the __Worker__ logs on the __Logs__ tab. 