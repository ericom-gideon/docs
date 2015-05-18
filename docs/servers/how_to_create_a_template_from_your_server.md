page_title:       How to create a template from your server
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users on how they can create a template from their server
page_keywords:    server volume clone VPS copy template 

## Create a template 

Templates provide a complete copy of a virtual machine from a specific snapshot in time. They differ to Backups in that you can create a new server from them. This is useful if you need multiple servers configured similarly.

Once you have spent time generically building and customising a server, it is then possible to create a template. Once the template is created you can build new servers from it - saving a lot of time.  If you are building a Windows Server template, you may wish to sysprep the newly created server to ensure the regeneration of Windows Server's unique SID information.

### Template creation

1. Click __Servers__ > __Manage__.

2. Select the Server you wish to Template and stop it.

3. Click on the __Storage__ tab. You will see the __Create Template__ button next to your primary disk volume.

4. Click __Create Template__ and give your template a name. The template will propagate into the same region as the existing server. __Please note that the template creation process will vary depending on the server size__, if you wish for the server to be in other zones go to __Servers__> __Resources__, Select __Edit__ next to your template and check the box/s of the zones you wish to have that template in (progress for that copy will be displayed).

5. Start your server again once the new template has successfully completed.

To use your new template, you'll need to create a new server.

### Server creation

#### Option 1: Use the New Server wizard.

1. On the __Servers__ page, click __New Server__.

2. Give your server a __Name__, select the __Location__ where your template was created, appropriate __Memory & CPU__ (this can differ from the the templated server).

2. In the _Images_ dropdown select the template you created.

    * Note: the template must have been propagated to this server's selected region before it is available in the dropdown.

3. Select any other options you'd like.

4. Click __Deploy!__ In a few minutes you'll have an identical server.

#### Option 2: Create from the Resources tab

1. Go to __Servers__ > __Resources__ tab.

2. In the Templates section, click __Create Server__.

3. Continue on with the New Server wizard.


### Template extractability

Templates allow you to duplicate servers in the Ninefold environment.

_You cannot download templates._
