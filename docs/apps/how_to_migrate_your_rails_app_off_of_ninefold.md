page_title: How to Utilize Ninefold Logging
page_description: Knowledge base article to instruct users on how they can migrate their Rails apps off of Ninefold to a new provider
page_keywords: heroku migration rails engineyard app

##How to Migrate Your Rails App Off of Ninefold

####Why
Ninefold has made the difficult decision to sunset our Rails app hosting service and US West region. This is a call to focus on the future. We aim to bring ease and performance to a wider range of technology platforms.

We understand that you demand a steady and stable app platform and that this decision impacts you. We want to make the process of migrating away from Ninefold as easy as possible.

This document guides you through the typical application components you need to consider when migrating your Rails app.

####Alternative Hosting Providers
These providers will provide the most similar experience to what you had on Ninefold. 

__PaaS Providers__

* [Cloud 66](http://blog.cloud66.com/migrating-your-rails-apps-to-cloud-66/) 
* [Shelly Cloud](https://shellycloud.com/blog/2015/03/how-to-migrate-rails-application-from-ninefold)
* [Engine Yard](https://www.engineyard.com/trial/9fold-move-over)  
* [Heroku](https://www.heroku.com)  

Alternatively you could look to build your own solution on a VPS/server provider. Ninefold allows VPS/server deployment in APAC.

##Database 
Your database is probably your most important asset. Depending on decisions you made when you first deployed your app, you may be using Ninefold’s recommended PostgreSQL 9.2 database, your own database (either hosted on Ninefold or elsewhere) or no database at all.

####Minimizing Downtime  
If you are after a smoother transition from Ninefold, you may choose to deploy your app to another provider and temporarily point the app to your Ninefold-provisioned Postgres database. This is a convenient way to ensure minimal downtime for the app. Of course you will still have to fully migrate the database, but that can be done at the earliest convenience to you (within the 90 day grace period).

Before you do this, you’ll need to:

1) Navigate to __App > Database (tab) > click on the db server link > Network >__ _Firewall Rules_. Then add in port 5432 for Start/End or just choose Postgresql for Protocol and press Add.  

2) Navigate to __App > Database (tab)__ and collect the following:

* IP address      
* Port     
* Database    
* User      
* Password      

3) Once you have collected the necessary information, you can use this as an Env Var in your app on another platform, typically in the following format: 

    DATABASE_URL='postgresql://[User]:[Password]@[IP address]:[Port]/[Database]'

For example if your app’s database name is db4102 and your database IP address is 123.123.123.123 with the default Postgres port of 5432 it would look like this:

    postgresql://app:Thi5R34LLyL0ngP4$$w0rDH4sh@123.123.123.123:5432/db4102

For Heroku, you can then do something like this:

    heroku config:add DATABASE_URL=postgresql://...

For other platforms, seek their documentation on how to populate environment variables.

If your database was hosted externally (MongoHQ, AWS RDS, etc), please ensure you copy the proper database Env Vars you may have used on Ninefold. 

Make sure you disable the database firewall rule when you’re finished accessing your database remotely.

####Exporting your database
We recommend using the pg_dump utility to generate a full script format backup (archive format + no privileges and no owner flags) of your database, using the following command in Terminal after opening up port 5432:
 
1) __App > Database (tab) > click on the server link > Network >__ _Firewall Rules_  
2) Add in port 5432 for Start/End or just choose Postgresql for Protocol and press Add.  
3) In Terminal type:

    pg_dump -h IP_ADDRESS -p 5432 -U app -d DATABASE_NAME -Fc -x -O -N postgis > backup.dump

The IP_ADDRESS, DATABASE_NAME, and password for Postgres can all be found in the _Database tab_.

***
__NOTE:__ If you want a human-readable script format, remove the `-Fc` flag from the above.
***

***
__NOTE:__ If you are using PostGIS, please remove the `-N postgis` option from the above.
***

Make sure you disable the database firewall rule when you’re done.

A more detailed guide on how to do this can be found [here](http://help.ninefold.com/getstarted/exporting_and_importing_postgresql_data/)

####Backups
To grab a Ninefold-created backup of your database:

Go to your __App > Database (tab)__ > Click _“Backup”_ under Manual Backups.
We use the `-x -Fc` flags (no privileges, custom archive format). This backup can then be downloaded to your local machine.

You will be able to also download any previous backups that you have taken.

Because of the way the postgis extension has been implemented on Ninefold, these backups will include tables that most likely will not be able to be restored into your app database on another provider without additional work outside the scope of this document.

####Importing your data
You will need your dump file to be reachable by URL to import to Heroku and Cloud66.  You can upload your dump file to an S3 bucket as described [here](http://docs.aws.amazon.com/AmazonS3/latest/gsg/GetStartedWithS3.html).

Alternatively, you can use a tool like dropbox to create a temporary, public URL for your database dump.

Detailed guides for importing data into your new provider can be found here:

* [Heroku](https://devcenter.heroku.com/articles/heroku-postgres-import-export#import)  
* [Cloud66](http://community.cloud66.com/articles/migrate-from-heroku-to-cloud-66#data)  
* [EngineYard](https://support.cloud.engineyard.com/entries/20996676-Restore-or-Load-a-Database#topic2)  
* [Shelly Cloud](https://shellycloud.com/documentation/database_backups#import_database)
* [Amazon AWS](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Procedural.Importing.html)  
* [Digital Ocean](https://www.digitalocean.com/community/tutorials/scaling-ruby-on-rails-setting-up-a-dedicated-postgresql-server-part-3) 
* [Linode](https://www.linode.com/docs/databases/postgresql/)  

##Environment Variables

You should copy your env vars from the __Configuration__ tab into a secure text file or private Gist. Using the [Figaro gem](https://github.com/laserlemon/figaro) will help make it easier to move to a new provider.

![Env var](../../img/envvar.png)

##DNS
If you delegated your domain to Ninefold’s name servers using [this guide](http://help.ninefold.com/apps/dns_management_for_rails_apps/), you will need to delegate your domain back to your registrar’s name servers. Please contact your registrar for instructions on how to do this. You will also need to remove any DNS records for your app either on the Overview tab or under __Servers > Network > DNS__.

![DNS](../../img/DNS.png)
![Network DNS](../../img/networkdns.png)

If you chose to simply CNAME your domain from your registrar, you will just need to change the record from the ninefold-apps address to the address given to you by your new hosting provider. 

##SSL
Hopefully you still have the certificate files on your local computer.

If not, click on “Edit certificates” and copy paste each one into its own text file. Add the proper extensions to them. 

![SSL](../../img/ssl.png)

##VPS/Bare Server  
If you have deployed a bare virtual server to handle app dependencies like Elasticsearch, Solr or MySQL in the US West region, you will need to move these services off these servers since the US West region will be closing. Any local data you require to keep should be migrated away utilizing services like SCP and FTP.

* [Help with SCP](https://kb.iu.edu/d/agye)  
* [Help with FTP](http://www.krizna.com/ubuntu/setup-ftp-server-on-ubuntu-14-04-vsftpd/)  

##Acknowledgement 
We built Ninefold for a community that demands a world class product, awesome support, and constant evolution and development of the platform.  We have enjoyed the journey and are humbled by those who joined us on the journey and believed in Ninefold.  This has been a hard decision, but we aren’t prepared to under deliver while focussing on our future direction and technology.  We truly wish you the best as you seek an alternate hosting provider. 
