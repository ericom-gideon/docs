page_title:       How to Attach an ISO
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users how upload and attach an ISO to their server
page_keywords:    server ISO template attach bare VPS

## Attach and upload an ISO

#### Uploading an ISO 

When creating a new server, you're not limited to Ninefold's Templates or Operating Systems. We provide you with the ability to either upload an ISO file directly from your computer or to connect to an existing web server to import the OS directly into your Ninefold account.

Please see this article for detailed information on the Operating Systems currently supported by the Citrix XenServer Hypervisor used by Ninefold.

You are solely responsible for ensuring you are licensed to operate Microsoft or other commercial software that you import. Please see this article for [Microsoft licensing information](microsoft_licensing_can_i_use_my_existing_software_and_licenses_on_ninefold.md).

1. From within the Ninefold Portal, select __Servers__ > __Resources__.

2. Click __Add new ISO__.

3. Click __Choose File__ if you have a suitable ISO stored on your local computer; alternatively enter the URL of the ISO file you wish to import  into your account.

4. If the ISO is Bootable (An OS Installation disk) make sure to tick the box. For information on regions see here. From the __OS Type__ dropdown list, select the OS Type. Use ""Other" if your OS type isn't listed.

	_Note: If you pick the wrong OS Type (The virtual machine errors on start, etc) 	you can change it by going to Servers->Resources and clicking on Edit on the ISO. 	You should pick Other if your OS isn't para-virtualised out of the box or fails 	on deployment on another OS Type._

5. Click __Upload__ and wait for the ISO to finish importing into your account.

#### Attaching an ISO 

1. First, log in to the Ninefold Portal.

2. Click on __Servers__ > __Manage__. This will list all servers in your account.

3. Select the Server which you want to attach an ISO to.

4. Click the Storage tab and scroll to the bottom of the page.

5. Find the ISO you wish to attach and click __Attach__.

6. Your ISO should be accessible within the Server.
