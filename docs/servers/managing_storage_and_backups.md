page_title:      Managing Storage & Backups
page_author:      Angelo Livanos 
page_description: guides on how to manage your ninfold storage volumes and how to use our backup facility
page_keywords:    backup, backups, volume, disk, storage

## Add storage volumes

1. Click on __Servers__ > __Manage__ from the top navigation menu.

2. Select the Server on which you'd like to add an additional storage volume. 

3. Select the __Storage__ tab from the context menu.

4. Scroll down to the __New Disk__ section. Enter a name for your new storage volume, select a size, then click __Create Disk__. 

The disk will create and automatically attach itself to your server. You will need to format and mount this disk like you would a brand new physical disk.

__Note:  If your Virtual Machine does not have XenTools installed or is a Windows-based instance, your virtual machine may need to be shut down for this action to work and attach correctly.__

## Viewing attached volumes

1. Select the __Servers__ tab from the top navigation menu.

2. Select a server on which you'd like view attached storage volumes.

3. Select the storage tab from the context menu. The top section of the page details your primary disk. The bottom section details your secondary disk(s).

## Viewing detached volumes

1. Click on __Servers__ > __Resources__ located on the top menu.

2. Scroll to the bottom of the page and you will find any detached volumes you have created.

## Move a storage volume

This article describes how to detach then reattach a storage volume to your server. You may want to do this to move a storage volume (secondary disk) from one server to another. 

1. Click on __Servers__ > __Manage__ at the top of the page. This will list all servers in your account.

2. Select the server which has the secondary disk you want to detach then reattach.

3. Click the __Storage__ tab

4. Click __Detach__ to detach the secondary disk you want to detach then reattach and click OK.

5. Select the __Account__ tab from the navigation menu.

6. Select the __Resources__ tab from the context navigation bar.

7. Scroll to the bottom of the page and you will find the detached volume.

8. Click __Reattach__ and select the server which you want to reattach the secondary disk to. 

9. Click __OK__ and you're all set!



## Backups to protect your data

A backup is actually a point-in-time "snapshot" - where the state of a server is copied from primary storage to our secondary storage platform for safe keeping.

This is useful to create exact copies of your servers prior to planned maintenance. When a snapshot is run, an exact copy of the selected server's disk volumes is saved at that point in time. This gives you a reference point that can be restored should the planned maintenance create any problems with your instance.

A backup (snapshot) is not stored on the local server instance, but as a new and independent copy of the instance. This enables the complete instance to be recovered even if it becomes corrupted.

When you create a new server using the Ninefold Portal, recurring backups are enabled for all disk volumes attached to the server by default. Recurring backups are taken at 2:00am Australian Eastern Standard Time and the last seven backups are retained (with the oldest being automatically overwritten).

#### Enable backups on new servers

When you are creating a server, the server creation wizard will give you the option to enable backups. If you tick this open, it will schedule a recurring daily backup that will involve taking a snapshot of the virtual machine every day at 2:00am Australian Eastern Standard Time. Up to 7 snapshots/backups will be kept at any given time.

If you require a different schedule to the one listed above, please contact Ninefold Support.

#### Manually enable backups on servers

1. Select your server and select the __Backups__ tab.

2. You can either enable recurring backups or take an immediate manual backup from this screen. Please note that all attached disk volumes will be backed up automatically.

3. Should you wish to restore a copy of your server from a previous backup, simply click the __Create server from backup__ button next to the backup identified with the appropriate date and time stamp. All volumes attached to this server will be restored to a new server, leaving the existing server unaffected.

__Note: Backups (snapshots) cannot be downloaded. We recommend that you use a third party backup utility as part of your DR strategy/BCP.__
