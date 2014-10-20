page_title:       How to Migrate from Heroku
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users moving their app from Heroku on what changes will needed to be made.
page_keywords:    heroku migrate move ninefold setup guide aws rails_12factor

## How to migrate from Heroku To Ninefold

#### Overview

Welcome to Ninefold! We have a couple of tasks we need you to do in order to migrate to Ninefold successfully. They are easy --- we promise!

#### Remove rails_12factor 

Open your Gemfile and remove the rails_12factor gem and save.

Run:

	$ bundle

	$ rake db:schema:dump

Commit changes and push to the repository of your choice.

#### Why remove the rails_12factor Gem?

We ask that this gem is removed because it installs 2 subsequent gems:

* rails_stdouting which sends logs to STDOUT

* rails_serve_static_assets which sets config.serve_static_assets = true

Neither of these gems are necessary with Ninefold.  We handle your logging and managing asset configuration.

config.serve_static_assets = true configures Rails itself to serve static assets. The Rails default setting is true except in the production environment. On Ninefold, we configure the web server (Apache by default) to serve public assets directly and to prefer gzip versions with proper cache headers on all fingerprinted files i.e. all precompiled assets. Setting this option as true will prevent proper page caching and will lower the performance of your app.

Heroku also requires config.assets.initialize_on_precompile = true on Rails 3.x since the application database is not available during slug compilation.  On Ninefold, we precompile assets in the full application environment so the Rails 3.x default setting config.assets.initialize_on_precompile = false will work without change. This option is not required for Rails 4.x.

#### Managing workers

If you have workers set up currently on Heroku, you will not have to do anything. Since you've already got your Procfile set up, we will automatically run it natively as Foreman is preinstalled and running on your app server.

If you’re using a service like Redis To Go, you can instead use the Redis instance we provide in the Ninefold environment.  

#### Managing add-ons

Ninefold has the following add-ons built in: Redis, New Relic, Memcached, and Sendgrid.

For any add-ons you have, you will need to follow the API documentation on their site so they can get up and running with us.

We're actively looking to add more built in add-ons as part of our setup for your apps, so keep an eye out as we build up our ecosystem!

#### Postgres packages

We currently add the following extensions and modules to every Postgres installation:

adminpack, autoinc, btree_gin, btree_gist, chkpass, citext, cube, dblink, dict_int, dict_xsyn, earthdistance, file_fdw, fuzzystrmatch, hstore, insert_username, intagg, intarray, isn, lo, ltree, moddatetime, pageinspect, pg_buffercache, pg_freespacemap, pg_stat_statements, pg_trgm, pgcrypto, pgrowlocks, pgstattuple, plpgsql, postgis, refint, seg, sslinfo, tablefunc, tcn, test_parser, timetravel, tsearch2, unaccent, uuid-ossp, and xml2

Note: the selected postgis package is one compatible for 9.2, the Ubuntu package installed is postgresql-9.2-postgis-2.1.

#### Importing your database

Both Ninefold and Heroku use PostgreSQL databases. Importing across is easy. Check out our [KB article](exporting_and_importing_postgresql_data.md) on how to do that here.

#### Deployment 

Here at Ninefold, we want to make app deployment and maintenance easy.

The first time you deploy your app, Ninefold will run the following commands:

* bundle
* rake db:setup (by definition this includes db:create, db:schema:load_if_ruby/db:structure:load_if_sql, and db:seed)
* rake db:migrate
* rake assets:precompile.  

For every code revision, Ninefold will autodeploy for you. It's pretty awesome. No more git push origin master then git push heroku master and heroku run rake db:migrate. It's just git push origin master.  During these subsequent autodeploys, we run: bundle, rake db:migrate, and rake assets:precompile.

_If you disabled post-commit hooks, you can enable them in the Overview tab of your app. This allows us to check when you've made a code push and autodeploy those changes immediately._

#### Deployment triggers

Say that you have a rake task that needs to be run after every migration, rake screw:cork. Or perhaps you have to move a folder before every migration. You would be able to run these commands in our deployment triggers (pre- and post-migration). The directions to do this are found [here](../apps/setting_and_changing_your_apps_configuration.md).

#### Env vars

To bring over your environment variables from Heroku, from the root directory of your app run:

	$ heroku config --shell

Copy the variables from there and paste them directly into the Environment variables section in your deployment setup. You can also add them later under the __Configuration__ tab.

***
NOTE: Make sure to copy _only_ the environment variables you will need. If you have Ninefold provision a PG database for you, you will NOT need to bring over the env var DATABASE_URL.
***

#### Rake tasks 

Say that you've got a rake task that needs to be run only once, such as rake db:categories. You can use our [awesome CLI](how_to_install_and_utilize_the_cli.md) to connect to your app. From there you can run rails console or run rake tasks or even run dbconsole. Super sweet.

#### Scheduled Tasks

Scheduled tasks are easy to create and use. We've got documentation on how to create and run them [here](../apps/creating_scheduled_tasks_in_rails.md).
