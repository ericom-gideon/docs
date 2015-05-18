page_title:       How to attach an ISO
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users how upload and attach an ISO to their server
page_keywords:    server ISO template attach bare VPS

## Attach and upload an ISO

#### Uploading an ISO 

When creating a new server, you're not limited to Ninefold's Templates or Operating Systems. If you create a _Production_ grade server, we also provide you with the ability to download a bootable ISO image and have it installed within your account. From this downloaded image, you can then [create a server by selecting the ISO in the Image dropdown](servers/create).

You are solely responsible for ensuring you are licensed to operate Microsoft or other commercial software that you import. Please see this article for [Microsoft licensing information](microsoft_licensing_can_i_use_my_existing_software_and_licenses_on_ninefold.md).

1. From within the Ninefold Portal, select __Servers__ > __Resources__.

2. Click __Add new ISO__.

3. Enter the URL of the ISO file you wish to import into your account (ensure the location is accessible over port 80 and that the URL string ends in .iso).

4. If the ISO is bootable (An OS installation disk) make sure to tick __Bootable__. From the __OS Type__ dropdown list, select the OS type. Use "Other 32/64-bit" if your OS type isn't listed.

	_Note: Often a server does not start from an uploaded ISO because the wrong OS type was chosen and computer says no._ You can always change the OS type of the ISO by navigating to Servers->Resources and clicking __Edit__ on the ISO. You should pick OS Type _Other 32/64-bit_ if your OS isn't para-virtualised or just won't start. If you are still experiencing issues, please file a ticket with support for clarification.

5. Click __Upload__ and wait for the ISO to finish importing into your account.

#### Attaching an ISO 

Sometimes you need to attach an ISO to your server to install software, patches or XenServer tools.

You can attach an ISO to one server at a time.

1. From within the Ninefold Portal, select __Servers__ > __Resources__.

2. Under the ISO files heading, find a list of previously uploaded ISOs.

3. Click __Attach__ to select the server to attach to (note the Server listing is filtered based on servers in the same regions as the uploaded ISO).

4. Once you've selected the server, click __Attach__.

5. Your ISO is now accessible within the server.

    * Note: if your server does not have XenServer tools installed, attaching the ISO to the server will fail unless your server is stopped. All Ninefold provided templates come with XenServer tools installed.
