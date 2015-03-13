page_title:       How to attach an ISO
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users how upload and attach an ISO to their server
page_keywords:    server ISO template attach bare VPS

## Attach and upload an ISO

#### Uploading an ISO 

When creating a new server, you're not limited to Ninefold's Templates or Operating Systems. We also provide you with the ability to pull in an image from a web server which you can then deploy into your Ninefold account.

You are solely responsible for ensuring you are licensed to operate Microsoft or other commercial software that you import. Please see this article for [Microsoft licensing information](microsoft_licensing_can_i_use_my_existing_software_and_licenses_on_ninefold.md).

1. From within the Ninefold Portal, select __Servers__ > __Resources__.

2. Click __Add new ISO__.

3. Enter the URL of the ISO file you wish to import into your account (ensure the location is accessible over port 80 and that the URL string ends in .ISO).

4. If the ISO is bootable (An OS installation disk) make sure to tick the box. From the __OS Type__ dropdown list, select the OS type. Use ""Other" if your OS type isn't listed.

	_Note: If you pick the wrong OS type (The virtual machine errors on start, etc) you can change it by going to Servers->Resources and clicking on Edit on the ISO. You should pick Other if your OS isn't para-virtualised out of the box or fails 	on deployment on another OS type, If unsure please file a ticket with support for clarification_

5. Click __Upload__ and wait for the ISO to finish importing into your account.

#### Attaching an ISO 

1. Click on __Servers__ > __Manage__. This will list all servers in your account.

2. Select the server which you want to attach an ISO to.

3. Click the storage tab and scroll to the bottom of the page.

4. Find the ISO you wish to attach and click __Attach__.

5. Your ISO should be accessible within the Server.
