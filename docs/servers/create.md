page_title: How to create a server
page_description: How to create a server
page_keywords: create, server, iso, upload

## How to create a server

1. Click on deploy server on the [dashboard](https://portal.ninefold.com) and follow the deploy server creation wizard. (Note:  You will need to have added a credit card to your account to deploy a virtual server).

2. You will need to provide a name for the server: Use only a combination of numbers and upper / lower case letters.

3. Choose the region: This dictates where the server will be geographically located. If you would like to have your server able to communicate across regions, you should enable Ninefold Net before continuing any further with your deployment.

4. Choose the level of processing. You will be able to scale up and down with one click as needed. (NOTE: This does not apply to the 512MB-X1 offering).

5. Select the operating system. You can choose from our optimized templates or you can [upload your own ISO](#uploading-an-iso).
*At a later date, if you plan to upgrade your template beyond the version origianlly provisioned (example: Ubuntu 12.04 to 14.04) please contact support prior to performing this action.

6. Select root disk storage
	* Servers have a standard 80GB root disk. You cannot modify this.
	* Custom ISOs can select smaller or larger root disks on deployment.
	* Custom Templates may have a different root disk that is dependent on the size of the disk on its creation. (e.g. a template of an 160GB virtual machine will be 160GB on deployment)
	
7. Select additional disk storage (optional): This will add another logical drive to your virtual machine that can be formatted and used to store additional data. You can remove or add more disk storage if required later.

8. Select additional options: Here you can choose a few more options such as adding a public IP address or having the password emailed to you on creation (if applicable). You can also enable recurring backups which will keep your server backed up on a daily basis.

9. Click Build Server and you will be advised on the progress. Once completed you will be able to access your machine via Live View or RDP/SSH (if applicable).

#### Uploading an ISO

When creating a new server, you're not limited to Ninefold's templates or operating systems. We provide you with the ability to either upload an ISO file directly from your computer or to connect to an existing web server to import the OS directly into your account.

1. From within dashboard, select "Servers"->"Resources" from the navigation bar.

2. Click add new ISO.

3. Click choose file if you have a suitable ISO stored on your local computer; alternatively enter the URL of the ISO file you wish to import into your account.

4. If the ISO is bootable (An OS installation disk) make sure to tick the box. 
5. From the "OS Type" drop down list, select the OS Type. Select other if your OS type isn't listed.

	**Note:** If you pick the wrong OS Type (The virtual machine errors on start, etc) you can change it by going to ""Servers"->"Resources" and clicking edit on the ISO. 

5. Click upload and wait for the ISO to finish importing into your account.
