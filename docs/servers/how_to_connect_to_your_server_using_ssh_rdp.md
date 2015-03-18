page_title:       How to connect to your server using SSH / RDP
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to connect your server via SSH/RDP
page_keywords:    server volume VPS RDP SSH key windows linux liveview

## Connect to your server using SSH / RDP


### Linux / Open source servers

__Linux / Open Source servers__ are typically administered from a terminal session via SSH (ensure port 22 is open on the Firewall); connect to your server's public IP address using the username defined [here](new_server_username_and_password.md).

__Ninefold now also offer SSH Keys to securely an easily acces your Linux based machines, click [here](ssh_keys.md) to learn more__

* If you are using Mac OSX, use the built-in "Terminal" application.

* If you are using Windows, we'd recommend you use [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/).

### Windows Server

Windows servers are typically administered via Remote Desktop. Ensure RDP is enabled on your Windows Server (port 3389 should be open on the firewall) before connecting to your server's public IP address using the Administrator account credentials.

* If you are using Mac OSX, download the [Remote Desktop client](http://www.microsoft.com/mac/remote-desktop-client) from Microsoft.

* If you are using Windows, the Remote Desktop client should be available under  Programs -> Accessories.

* If you are using Linux, a good option is the [2X client for Remote Desktop](http://www.2x.com/rdp-client/).

### Live View

Ninefold's dashboard has a feature called "Live View" which allows you to connect to your server for administration purposes. While convenient, Live View has limitations around screen resolution, performance, keyboard & mouse compatibility and should therefore be used for initial configuration or casual use only.

As soon as you have the networking and firewall rules configured appropriately you should use your favourite administration tools for the best experience.
