page_title:       Using Backups To Protect Your Data
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct server users how to view attached and detached storage volumes
page_keywords:    server volume backups safety VPS snapshot

## Using backups to protect your data

#### Overview

A backup is actually a point-in-time "snapshot" - where the state of a server is copied from primary storage to our secondary storage platform for safe keeping.

This is useful to create exact copies of your servers prior to planned maintenance. When a snapshot is run, an exact copy of the selected server's disk volumes is saved at that point in time. This gives you a reference point that can be restored should the planned maintenance create any problems with your instance.

A backup (snapshot) is not stored on the local server instance, but as a new and independent copy of the instance. This enables the complete instance to be recovered even if it becomes corrupted.

When you create a new server using the Ninefold Portal, recurring backups are enabled for all disk volumes attached to the server by default. Recurring backups are taken at 2:00am Australian Eastern Standard Time and the last seven backups are retained (with the oldest being automatically overwritten).

#### How to enable backups on new servers

When you are creating a server, the server creation wizard will give you the option to enable backups. If you tick this open, it will schedule a recurring daily backup that will involve taking a snapshot of the virtual machine every day at 2:00am Australian Eastern Standard Time. Up to 7 snapshots/backups will be kept at any given time.

If you require a different schedule to the one listed above, please contact Ninefold Support.

#### How to manually enable backups on servers

1. Select your server and select the __Backups__ tab.

2. You can either enable recurring backups or take an immediate manual backup from this screen. Please note that all attached disk volumes will be backed up automatically.

3. Should you wish to restore a copy of your server from a previous backup, simply click the __Create server from backup__ button next to the backup identified with the appropriate date and time stamp. All volumes attached to this server will be restored to a new server, leaving the existing server unaffected.

__Note: Backups (snapshots) cannot be downloaded. We recommend that you use a third party backup utility as part of your DR strategy/BCP.__
