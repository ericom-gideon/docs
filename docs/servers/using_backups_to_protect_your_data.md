page_title:       Using backups to protect your data
page_author:      Angelo Livanos, Brittany Martin, Shaun Domingo
page_description: Knowledge base article to instruct server users how to take manual and scheduled backups/snapshots of their servers, and how to restore.
page_keywords:    server volume backups safety VPS snapshot restore

## Backups to protect your data

A backup is actually a point-in-time "snapshot" - where the state of a server is copied from primary storage to our secondary storage platform for safe keeping.

This is useful for creating exact copies of your servers prior to planned maintenance. When a snapshot is run, an exact copy of the selected server's disk volumes is saved at that point in time. This gives you a reference point that can be restored should the planned maintenance create any problems with your instance.

A backup (snapshot) is not stored on the local server instance, but as a new and independent copy of the instance. This enables the complete instance to be recovered even if it becomes corrupted.

#### Enable scheduled backups on new servers

When you create a new server using the Ninefold Portal __New Server__ wizard, you can choose to take a daily backup at a small cost (see the Ninefold pricing details for more details). We only take one recurring backup by default with the oldest being automatically overwritten. Each of your server's disks are backed up during this process. The default daily backup runs in the early hours of the morning (Australian Eastern Standard Time).

Once your server is created, you can set your own daily or weekly backup schedule policy.

1. Select your server and select the __Backups__ tab.

2. Next to Scheduled Backups, select the __Edit__ button.

3. Use the Interval dropdowns to select your own __Every__ schedule, or specify your own __Cron__ expression. If you enter a cron expression the dropdowns will change to reflect your expression. We do not permit hourly backups. Note: the schedule you set up takes your Ninefold Portal user account's timezone and applies it to the backup schedule.

4. Select the maximum number of scheduled backups you wish to keep as part of this policy.

5. Click the __Save__ button. Your new scheduled backup policy will take effect momentarily.

#### Take manual backups on servers

You can take a manual backup of your server at any time.

1. Select your server and select the __Backups__ tab.

2. You can either enable recurring backups or take an immediate manual backup from this screen. Please note that all attached disk volumes will be backed up automatically.

3. Should you wish to restore a copy of your server from a previous backup, simply click the __Restore__ icon next to the backup identified with the appropriate date and time stamp. All volumes attached to this server will be restored to a new server, leaving the existing server unaffected.

__Note: Backups (snapshots) cannot be downloaded. We recommend that you use a third party backup utility as part of your DR strategy/BCP.__
