page_title:       How to create a template from your server
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users on how they can create a template from their server
page_keywords:    server volume clone VPS copy template 

## Create a template 

The ability to create a template from your server is a very useful feature if you need multiple servers configured similarly. Once you have spent the time to build and customise a server to your specific requirements it is then possible to create a template from which you can quickly and easily build new servers - saving a lot of time.  If you are building a Windows Server template, you may wish to sysprep the newly created server to ensure the regeneration of Windows Server's unique SID information.

### Template creation

1. Click __Servers__ > __Manage__.

2. Select the Server you wish to Template and stop it.

3. Click on the __Storage__ tab. You will see the __Create Template__ button next to your primary disk volume.

4. Click __Create Template__ and give your template a name. The template will propagate into the same zone as the existing server, if you wish for the server to be in other zones go to __Servers__> __Resources__, Select __Edit__ next to your template and check the box/s of the zones you wish to have that template in (progress for that copy will be displayed)

5. Start your server again once the new template has successfully completed.

To use your new template, you'll need to create a new server.

### Server creation

1. On the __Servers__ page, click __Create a new Server__.

2. Select the template you created previously from the image dropdown

4. Complete the server creation wizard and you're done!

Alternatively, go to __Servers__ > __Resources__ tab where you'll find all of the saved templates available in your account. You can create a new server or delete any Templates that are no longer needed from this page.

_Note: You cannot download templates._
