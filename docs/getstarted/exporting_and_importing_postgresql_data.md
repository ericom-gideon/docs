page_title:       Exporting And Importing PostgreSQL Data
page_author:      Risa B. (converted by Britt)
page_description: Knowledge base article to instruct users on how to they can move their Postgres data
page_keywords:    rails database pg pgadmin dump restore import cli data export

## Exporting And Importing PostgreSQL Data

PostgreSQL allows for users to import and export their databases, whether it’s for backup purposes or to transfer data between servers or environments.  In either case, certain formats require certain commands.  Although there are no right and wrong ways to do this, the article will focus first on the recommended way, then on alternative ways.

#### THE RECOMMENDED WAY FOR EXPORT/IMPORT: TERMINAL
The terminal method is great for custom exporting and importing of a database. The high-level overview is the following:

1. Open up port 5432 in Ninefold Portal
2. Type in your Terminal commands to export or import
3. Close port 5432

Read on for more information about each.

_Note: These directions have been tested with Postgres 9.3.x_

#### Open port 5432

Port 5432 is the TCP port that Postgres listens in on.  By default it is closed for security.

1. Start from the Database tab (Portal > App > Database tab)
2. Click on the server URL under the Database servers section
3. In the new window, click on the Network tab
4. Add in ‘5432’ in both Start and End, then click Add

#### Exporting

In Terminal, type one of the following. There may be other flags you’d like to append; put those in before the > sign.  

__Uncompressed:__

	$ pg_dump -h IP_ADDRESS -p 5432 -U app -N postgis -N topology -d DATABASE_NAME > your_file_name.sql

__Compressed:__

	$ pg_dump -h IP_ADDRESS -p 5432 -U app -a -N postgis -N topology -Fc -d DATABASE_NAME > your_file_name.dump 

__The variables__

IP_ADDRESS = The IP address of your database server

DATABASE_NAME = The database name of your server (found on the Database tab of your app)

__The flags__

* -h = Host
* -p = Port
* -U = User
* -d = Database name
* -N = Exclude schema (in particular, exclude the PostGIS and topology schema if you aren’t using any of their geographic functionality)
* -Fc = Format compressed

__Optional flags__

* -a = Data only
* -c = Clean

You will then be prompted to enter the database password. This is on the Database tab. Click __Show__ to view the password.

_NOTE: If you’re exporting your database from an external hosting provider like [Heroku](https://devcenter.heroku.com/articles/heroku-postgres-import-export), please check their documentation._

#### Importing

Much like Exporting, there’s only one step. However the command to use will depend on the type of file created during the Export process.  If using an external hosting provider’s backup file, you will most likely need to use the command for Compressed files.  The commands and flags are very similar to pg_dump with some slight nuances.

_WARNING: This will override your database! If unsure, backup your database before overriding it._

__Uncompressed:__

	$ psql -h IP_ADDRESS -p 5432 -U app -f your_file_name.sql

__Compressed:__

	$ pg_restore -h IP_ADDRESS -p 5432 -U app -d DATABASE_NAME your_file_name.dump

A word on importing. Running the import command most likely will produce errors, such as “Error: role app already exists.”  This is expected behavior as the database that you’re importing into already has been created; tables, keys, and roles will already exist. However the data should transfer amicably. It is a good idea to confirm that your actual data (not tables or schema) has been transferred properly.

#### Close port 5432

1. Start from the Database tab (Portal > App > Database tab)
2. Click on the server URL under the Database servers section
3. In the new window, click on the Network tab
4. Click Remove for port ‘5432’ and click OK to confirm.

### ADDITIONAL WAYS TO EXPORT DATABASES FROM NINEFOLD

Currently there are a few methods to use in order to export your database.  Each of these has their own merits. Our recommended method may be the Terminal as it’s the most robust, however we would be remiss if we did not share the other methods with you.

#### CLI

Database backups can be created and downloaded using our CLI. Don’t have it? Get it [now](http://www.ninefold.com/docs/getstarted/how_to_install_and_utilize_the_cli)!  Here are the commands to create a manual backup and to download it.

	$ ninefold signin  (Sign in with your Portal creds)
	$ ninefold db backup   
	$ ninefold db download   (This will be downloaded in the current directory)

The file downloaded will be in YYYY-MM-DDTIME.tar.gz format. Open the archived file and drill down until you get to the .sql file.

#### Portal

This is as easy as the CLI, except you will have to log into Ninefold’s Portal.

1. Log into Portal [https://portal.ninefold.com](https://portal.ninefold.com)
2. Choose your App from the list > Database tab
3. Click “Backup now” in the __Manual backups__ section.
4. This may take a while depending on the size of your database.
5. Click ‘Download’ to download this backup.

Alternatively, you can set up scheduled backups. It’s free!  

### ADDITIONAL WAYS TO IMPORT DATABASES TO NINEFOLD
As with exporting, importing has a variety of methods to use. This section will focus on using the CLI, Terminal, and a cool (free!) tool called PGAdmin.

_WARNING: These will override your database! If unsure, backup your database before overriding it._

#### CLI

As always, we’re looking to make your life a bit easier. We now support importing in database dump files (compressed).  Follow the steps above specifically to create compressed dump files.

In the CLI, these are the commands needed to run:

	$ ninefold signin (sign in with your Ninefold Portal creds)
	$ ninefold db import FILENAME

Choose the app you want to import into and Boom! You’re good to go.

#### PGAdmin

[PGAdmin](http://www.pgadmin.org/) is a simple and easy-to-use tool for Mac OS X users for dealing with Postgres. However, when restoring with PGAdmin, ensure that you’ve got a compressed dump file (using the -Fc flag), else the restore process will not work.  You will also have to open port 5432 prior to importing the database then close it afterwards.  Directions to do that can be found above.  

1. Choose File > Add Server.
2. In the next window, fill in the information for Name (whatever you want to call it), Host, Maintenance DB, username, and Password. Click OK to continue.
3. Once the server’s been added to your list, drill down to your DATABASE_NAME.  From there, right click and choose Restore…
4. In the next window, choose the location of your .dump file and choose app for Rolename. Option lists #1 and #2 have a plethora of choices to choose from. Click Restore.
5. Close port 5432 once you have completed the import process.

The messages window will display the import process. As with any import process, errors may be displayed.  It is always a good idea to review those errors and also log into the rails console via the CLI to ensure your data has been correctly transferred.

If you’d like to read more about the various Postgres flags used during export and import, check out their awesome documentation:

* [pg_dump](http://www.postgresql.org/docs/9.2/static/app-pgdump.html)
* [pg_restore](http://www.postgresql.org/docs/9.2/static/app-pgrestore.html)
* [psql](http://www.postgresql.org/docs/9.2/static/app-psql.html)

----------------------

And as always, if you have any questions or have any issues, please drop us a note on chat or create a ticket!