page_title: Deploying a Rails app with your own database
page_author:
page_description: Want to deploy a Ruby on Rails app with your own database, such as MySQL or Mongo DB? Read this article to findout how.
page_keywords: database mongo mysql byodb

## Deploying a Rails app with your own database

Out of the box, Ninefold enables you to implement a database server with PostgreSQL installed. Want to bring your own database such as MySQL or MongoDB? Read on! The following is our recommendation on how to implement BYODB.

Before you deploy, we recommend you __read the entire article__ so you deploy with all of the current settings. There is a quiz at the end of the article!

#### Infrastructure
If you want your DB hosted on Ninefold and its not PostgreSQL, Please ensure you deploy this as a bare virtual server before deploying your app ensuring you tick the 'Enable NinefoldNet' box to ensure it is provisioned on the same private network as your app.

#### Gemfile

Include the relevant database gem in your Gemfile. Be sure to bundle install!

Example for this article will be with MySQL:

	# Use mysql as the database for Active Record

	gem 'mysql2'

#### Database.yml configuration

In an effort to keep your passwords out of your repo (no fun if they get out there!), alter the file to the following format for the Rails environment being used on your Ninefold app.

For a ‘production’ environment:

	production:

		adapter: mysql2

 		database: your_db_name

 		host: #{DATABASE_URL} or ENV[DATABASE_URL]

Your file can include encoding, if you like.

#### Deploying an app with BYODB

In the deployment wizard, just select No to the question of __Want a new PostgreSQL database built?__.

#### Environmental variables

In the dashboard, we have the environment variables section (under the configuration tab) or in step 3 of the deployment wizard, we will ask for your variables. You will want to include the following configured line for your database:

   	DATABASE_URL=mysql2://username:password@location:port/your_db_name

in the __Environment Variable__ window.

_Quiz: just kidding but we’re glad you read to the bottom!_
