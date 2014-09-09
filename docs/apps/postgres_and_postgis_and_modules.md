page_title: 			Postgres, PostGIS, and Postgres Modules
page_description: Knowledge base article about Postgres and the installed modules
page_keywords: 		postgres postgresql psql postgis schema modules database

## PostgreSQL, PostGIS, and Postgres modules

#### PostgreSQL
PostgreSQL, or more colloquially postgres, is a powerful open source SQL database.

If you aren't already using postgres, you don't need to change your local setup, but you will need to add a few lines of code to your Gemfile:

    group :production do
      gem 'pg'
    end

This will tell Rails that you want to use a postgres database in your production environment.  Don't worry, it won't affect your development environment.  Once you have this in your Gemfile, you can push the code to Github and redeploy your app.  We'll take it from there.

On Ninefold, your app is deployed with Postgres 9.2 but Ninefold will be moving to 9.4 in the fall of 2014.

If you're looking to use your own database (such as MySQL or a NoSQL database), it's totally possible. Check out [this doc](deploying_a_rails_app_with_your_own_database.md) on how to deploy with your own database.

#### Postgres modules and PostGIS
When you deploy a Rails application and we create an instance of PostgreSQL for you, we automatically provide PostGIS for you to use. There are also a number of contrib modules that are part of PostgreSQL that we have made available.

Currently available:

adminpack  
autoinc
btree_gin
btree_gist  
chkpass  
citext  
cube  
dblink  
dict_int  
dict_xsyn  
earthdistance  
file_fdw  
fuzzystrmatch
hstore  
insert_username  
intagg  
intarray  
isn  
lo  
ltree  
moddatetime  
pageinspect  
pg_buffercache  
pg_freespacemap  
pg_stat_statements  
pg_trgm  
pgcrypto  
pgrowlocks  
pgstattuple  
plpgsql  
postgis  
refint  
seg  
sslinfo  
tablefunc  
tcn  
test_parser  
timetravel  
tsearch2  
unaccent  
uuid-ossp  
xml2

#### PostGIS and the activerecord-postgis-adapter gem
Are you using the activerecord-postgis-adapter gem for use with PostGIS? Excellent. Which means you probably have your database adapter point to PostGIS in your database.yml, right?

If Ninefold is hosting your Postgres database, we override your database.yml file. This will cause PostGIS to not work properly, and your :spatial indexing won't work either. But not to worry! There is a simple solution. :)

Go to __Portal__ > __Your app__ > __Configuration__ (tab) then scroll to the _Environment Variables_ section at the bottom.  Add in the following:

    DATABASE_ADAPTER=postgis

Press _Update_ then _Redeploy_ your app.

So what's happening? Rails will look at the env var first before the database.yml file then use the rest of our settings to configure the connection.  Once that is set, the database adapter will then be set to postgis, the schema_search_path will be set to “public, postgis, topology” and the rails app will find the objects properly. Boom! Done. 
