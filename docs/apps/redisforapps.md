page_title:       Redis setup for Rails Apps
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users on how they can implement Ninefold's Redis instance for their Rails apps
page_keywords:    redis rails worker background resque

## Redis Setup 

#### Redis rocks!

[Redis](http://redis.io/) is an open source, BSD licensed, advanced key-value cache and store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets, sorted sets, bitmaps and hyperloglogs. Even better, Ninefold offers it to you for free! 

#### Resque to the rescue

[Resque](https://github.com/defunkt/resque) is a Redis-backed library for creating background jobs, placing those jobs on multiple queues, and processing them later. 

***
Stay tuned for a Ninefold help doc on Resque!
***

#### Enabling Redis

Easy! During deployment if you choose to add a worker to your app, we will automatically setup Redis and use your Procfile to run background jobs. 

#### Redis app config

__Procfile__

Since Ninefold provides the Redis instance, there isn't a need to add a __redis:__ line to your Procfile.  

__redis.rb__

In your app under __config/initializers/redis.rb__, use one of the following environment variables: 

* OPENREDIS_URL
* REDISTOGO_URL
* REDIS_URL
* REDIS_PROVIDER_URL

and Ninefold will fill the information into the deployed app where the worker is located. The key will not show anywhere on Ninefold portal, but trust us, we'll add it. 


 
