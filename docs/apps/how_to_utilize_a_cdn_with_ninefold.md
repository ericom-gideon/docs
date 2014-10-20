page_title: How To Utilize A CDN With Ninefold (S3 And CloudFront)
page_description: Knowledge base article to instruct users how they can implement a CDN with Ninefold Rails hosting. 
page_keywords: rails CDN Cloudfront s3 assets 

## How to utilize a CDN 

#### What is a CDN?

A content delivery network (CDN) refers to a large network of servers deployed across multiple networks in several data centers, often geographically distributed. CDNs are employed by companies across many industries to deliver HTTP content, rich media like streaming audio and video, and downloadable files.

#### Should I use a CDN?

Ninefold’s #1 goal for your site is performance. Using a CDN optimizes the delivery of static assets on your site. If your app serves up a lot of content, we highly recommend implementing a CDN.

#### How to set up a CDN with Ninefold

There are lots of CDN providers out there. In this article, we take you through setting up your Ninefold Rails app to serve assets from Amazon S3, using a CloudFront distribution to serve those files even faster to visitors based on their geographical location. If you choose to use another CDN provider, these instructions will still help you.

#### Amazon S3 setup

First of all, add the asset_sync gem to your Gemfile:

	gem "asset_sync"

then bundle install.

	$ bundle install

You will need to add the following configuration environment variables to your Ninefold app once you have created an Amazon AWS account:

* FOG_PROVIDER
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY

Next, create a bucket where you want to synchronize the compiled assets to. For this example, we will refer to the bucket: ‘brutus’. Log into the AWS Management Console, clicking the "S3" tab and by clicking the "Create Bucket" button. You will then add the FOG_DIRECTORY bucket to your __Environment variables__ and update.

Now, take a look at config/application.rb in your Rails app to make sure the following settings are enabled:

	# Enable the asset pipeline

	config.assets.enabled = true
	config.assets.digest = true

If you have more than one top-level manifest file under your stylesheets, make sure you also add them in config/application.rb or they will not be compiled and synchronized to S3. It will break your Rails app!

Before deploying your app, we recommend that your S3 configurations work on your local machine. If everything looks good, go ahead and deploy on to Ninefold. Since Ninefold does run rake assets:precompile for you, new and edited assets will be synced to your S3 bucket.

_Note: if you are you're deploying the same application with two different rails environments, you should set up separate buckets per environment. That’s what I prefer since it makes it easier to troubleshoot._

#### Amazon CloudFront setup

From here, you have the option to implement Amazon CloudFront. It integrates with S3 to give developers a way to distribute content to end users with lower latency and higher data transfer speeds.

You can do this very easily by using the "Create Distribution Wizard" under the "CloudFront" tab in your AWS Management Console. Once logged in you can go to the CloudFront control panel and select ‘Create distribution’. When prompted for the delivery method, select ‘Web’. Once it is set up, it will take Amazon a few minutes to create the distribution.

After redeploying to Ninefold, it is a good idea to test that your distribution is working. To do this, manually select the full URL of one of your static assets, such as a CSS file and attempt to request this file through your CloudFront endpoint that was provided to you. If your CSS file is returned to you, you are almost done!

#### Adding CloudFront 

Making Rails serve assets from a CDN is simple. Support for CDNs is built into most versions of Rails. You will only need to make a simple code change in your app to implement a distribution network.

Within config/environments/production.rb you will see a setting asset_host that is responsible for prepending a domain onto all asset links created.

Once deployed, your app will now serve all assets through the CloudFront distribution network. Sweet!
