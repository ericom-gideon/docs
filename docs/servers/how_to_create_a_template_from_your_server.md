page_title:       How To Create A Template From Your Server
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users on how they can create a template from their server
page_keywords:    server volume clone VPS copy template 

## How to create a template from your server

The ability to create a template from your server is a very useful feature if you need multiple servers configured similarly. Once you have spent the time to build and customise a server to your specific requirements it is then possible to create a template from which you can quickly and easily build new servers - saving a lot of time.  If you are building a Windows Server template, you may wish to sysprep the newly created server to ensure the regeneration of Windows Server's unique SID information.

### Template creation

1. Click __Servers__ > __Manage__.

2. Select the Server you wish to Template and stop it.

3. Click on the __Storage__ tab. You will see the __Create Template__ button next to your primary disk volume.

4. Click __Create Template__ and give your template a name. The creation process should take no more than a few minutes.

5. Start your server again once the new template has successfully completed.

Your template will now be available for new server deployment across all Ninefold availability zones.

To use your new template, you'll need to create a new server.

### Server creation

1. On the __Servers__ page, click __Create a new Server__.

2. At Step 4 in the server creation wizard, select __Use your own Template__.

3. Select the template you created previously.

4. Complete the server creation wizard and you're done!

Alternatively, go to __Servers__ > __Resources__ tab where you'll find all of the saved templates available in your account. You can create a new server or delete any Templates that are no longer needed from this page.

_Note: You cannot download templates._
