#### Deploying A Rails App With Your Own Database

Out of the box, Ninefold enables you to implement a database server with PostgreSQL installed. Want to bring your own database? Read on! The following is our recommendation on how to implement BYOD.

Before you deploy, we recommend you read the entire article so you deploy with all of the current settings. There is a quiz at the end of the article!

#### Gemfile

Include the relevant database gem in your Gemfile. Be sure to bundle install!

Example for this article will be with MySQL:

	# Use mysql as the database for Active Record

	gem 'mysql2'

#### Database.yml Configuration

If you have a database.yml file, change it to database.yml.sample. In an effort to keep your passwords out of your repo (no fun if they get out there!), alter the file to the following format for the Rails environment being used on your Ninefold app.

For a ‘production’ environment:

	production:

		adapter: mysql2

 		database: your_db_name

 		host: #{DATABASE_URL} or ENV[DATABASE_URL]

Your file can include encoding, if you like.

#### Deploying an App with BYOD

In the deployment wizard, just uncheck the __I would like a database built for my app__ box in Step 3 of 4.

#### Environmental Variable

In Portal, we have the Environment variables section (under the Configuration tab) or in Step 4 of 4, we will ask for your variables. You will want to include the following configured line for your database:

 	DATABASE_URL=mysql://username:password/location:port/your_db_name

in the __Environment Variable__ window.

#### Before Migration Trigger in the Ninefold Portal

Also in Step 4 of 4, add a __before migrations trigger__ (under Additional deployment commands):

 	mv config/database.yml.sample config/database.yml

You will be all set to deploy the app with your own database. Any further questions can be directed to our LiveChat below, or you are welcome to log a ticket in the Ninefold Portal.

_Quiz: just kidding but we’re glad you read to the bottom!_