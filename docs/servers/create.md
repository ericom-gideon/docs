page_title: How to create a server
page_description: How to create a server
page_keywords: create, server, iso, upload

## How to create a server

1. Click on deploy server on the [dashboard](https://portal.ninefold.com) and follow the deploy server creation wizard. (Note:  You will need to have added a credit card to your account to deploy a virtual server).

2. You will need to provide a name for the server: Use only a combination of numbers and upper / lower case letters.

3. Choose the region: This dictates where the server will be geographically located. If you would like to have your server able to communicate across regions, you should [enable Ninefold Net](../networking/ninefold_net.md) before continuing any further with your deployment.

4. Choose the level of processing. You will be able to scale up and down with one click as needed. (NOTE: This does not apply to the 512MB-X1 offering).

5. Select the OS image. You can choose from our optimized templates or you can [upload your own ISO](how_to_attach_and_upload_an_iso.md).

At a later date, if you plan to upgrade your template beyond the version origianlly provisioned (example: Ubuntu 12.04 to 14.04) please contact support prior to performing this action.

6. Select root disk storage
	* Servers have a standard 80GB root disk. You cannot modify this.
	* Custom ISOs can select smaller or larger root disks on deployment.
	* Custom templates may have a different root disk that is dependent on the size of the disk on its creation. (e.g. a template of an 160GB virtual machine will be 160GB on deployment)
	
7. Select additional disk storage (optional): This will add another logical drive to your virtual machine that can be formatted and used to store additional data. You can remove or add more disk storage if required later.

8. Select additional options: Here you can choose a few more options such as enabling recurring backups which will keep your server backed up on a daily basis or [enable Ninefold Net](../networking/ninefold_net.md) if it has not already been enabled previously.

9. Click Deploy and you will be advised on the progress. Once completed you will be able to access your machine via Live View or RDP/SSH (if applicable).