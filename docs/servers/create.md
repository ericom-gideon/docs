page_title: How to create a server
page_description: How to create a server
page_keywords: create, server, iso, upload

## How to create a server

1. Select __New Server__ on the Ninefold [dashboard](https://portal.ninefold.com)

2. Choose if you wish to deploy a __Production__ or __Development__ grade server

    * Production grade servers provide you with the option of creating a server from your own uploaded ISO, unparalleled local support and larger disk images.

3. Name your server to make it easy to identify later

4. Choose your server architecture including its Location, Memory/CPU and Server Image (e.g. Centos)
    * When choosing to create a Production grade server you have the option of creating it from your own ISO. You must [first upload an ISO and make it __Bootable__](servers/how_to_attach_and_upload_an_iso/). Once done, your ISO will appear in __Your Templates__ section of the __Image__ dropdown in the Create Server wizard. Once an ISO Image is selected you must additionally select a suitable Primary Disk size. For maximum uptime, performance and stability ensure you install XenServer paravirtualisation tools in your own custom servers.

5. Apply additional options such as __Daily Backups__, __Additional Storage__ or specify [__User data__](servers/user_data/) (optional)

6. Click __Deploy!__ and follow the deployment notifications presented to see when you server will be ready.

***At a later date, if you plan to upgrade your template beyond the version origianlly provisioned (example: Ubuntu 12.04 to 14.04) please contact support prior to performing this action.***