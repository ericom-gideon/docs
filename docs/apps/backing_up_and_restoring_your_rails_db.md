page_title: Backing Up and Restoring Your Rails DB
page_author: Brittany Martin (& Risa)
page_description: Knowledge base article to instruct users on how they back up and restore databases for Rails apps
page_keywords: rails database pg restore data export backup

## Backup and Restore

It is generally good practice to make sure you're keeping backups of your database.  If you are running a large application with millions of users, it is imperative that you keep regular backups of your users' data. Ninefold provides an easy way to automate this process, and since we don't currently charge for this feature, there's no reason not to enable it.


## Backups

Ninefold allows for a simple way to get backups created. Here's how.

Go to your __Dashboard__ > __App__ > __Database__ tab

Here you will be presented with two options on how to backup your data: manually or scheduled.

#### Manual

Simply click the __Backup Now__ button to backup your database manually. This is ideal if you plan to redeploy your app, re-scale, or perform any other maintenance operation.

#### Scheduled

Scheduling backups for your Rails app is now easier then ever through 3 automation methods being: hourly, daily, or the option of adding a Cron job.

Click the ‘Enable’ button to reveal the automation options.

Choose your preferred automation method:

* Hour
* Daily
* Week

The first option allows scheduled backups in hourly increments (for example: every ‘21’ hours).

The second option allows scheduled backups in specific times everyday (24 hour time) for example, 10:15(am) or 22:15(pm).

The third option allows automation according to a cron configuration.

For example:

* To run the job on every minute of every hour of every day of every month: `* * * * *`
* To run the job at 01:00 AM every day: `* 1 * * *`
* To run the job at 03:20 AM every day: `20 3 * * *`
* To run the job at 03:18 AM, 03:19AM and 03:20AM every day: `18,19,20 3 * * *`
* To run the job at 05:00 AM of every 4th of the month: `* 5 4 * *`
* To run the job at 05:00 AM of every 4th of July: `* 5 4 7 *`
* To run the job at 12:00 AM of every Sunday: `* 0 * * 0`
* To run the job at 22:00 on the first and second Sundays of each month: 0 22 * * sun#1,sun#2

You can also select how many backups are kept before they are cycled over by new snapshots by simply changing the number in the ‘keep’ field. For example, enter ‘7’ to retain 7 snapshots or even ‘1’ to retain only 1.

Click the save button and confirm that you want to save your configuration, and your backups are now automated!

## Restore

Restoring an app’s database will override the current data in your app. Do this with caution!

1. Go to your Dashboard, then your App, and select the __Database__ tab.
2. Click on the __Restore__ button on the backup you wish to restore from.
3. Click __Ok__ when the pop-up box appears.

Once the restore is complete, a green box will appear indicating a successful database restore.

Your database has now been successfully restored from a backup!
