page_title: Disable server firewall 
page_author: Angelo Livanos
page_description: Knowledge base article to instruct users on how they can disable their server operating system firewall (Windows/CentOS/Ubuntu)
page_keywords: server firewall windows centos ubuntu 

## Disable server OS firewall

#### Overview

***

This guide is for Windows, CentOS and Ubuntu Ninefold bare servers only.  

***

As part of your Ninefold server deployment, we provide a virtual routing appliance which includes a virtual firewall. There is an ability to add and remove TCP/UDP ports via the portal. More information can be found [here](http://help.ninefold.com/networking/how_to_open_firewall_ports/). 

It may not be necessary to also run the operating system based firewalls that come with the Windows, CentOS and Ubuntu Ninefold bare server templates. If the server is experiencing a network based issue after a server reboot, we often recommend diabling the server firewall to see if it is part of the problem. 

#### Windows Server 2008 R2

1. Sign into your server 
2. Click __Start__
3. Click __Control Panel__
4. Click __Network and Internet__
5. Underneath __Windows Firewall__, click __Turn Windows Firewall__ on or off
6. General tab of the __Windows Firewall Settings__ dialog box, select __Off__  and then click __OK__


#### Disabling IPTABLES on Centos

1. Sign into your server as root user
2. Run:


		/etc/init.d/iptables save
	
		/etc/init.d/iptables stop
	
		chkconfig iptables off (this stops the FW from starting on boot)

#### Disabling UFW on Ubuntu

1. Sign into your server as root user
2. Run: 

		$ sudo ufw disable
		



