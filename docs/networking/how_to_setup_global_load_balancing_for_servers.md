page_title:       How To Setup Global Load Balancing For Servers
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article instruct users how they can setup local load balancing
page_keywords:    server volume network load balancer global 

## How to setup global load balancing for servers

### Overview

Global Load Balancing solutions allow you to spread workloads across multiple zones. You can route traffic geographically and implement secure and scalable DNS to improve your business continuity and user experience.

### Pre-Setup

Before getting started, you will need to:

* Have a domain name you wish to use that is delegated to Ninefold. Check out this [article](http://www.ninefold.com/docs/networking/how_to_delegate_your_domain_to_ninefold).

* At least one virtual machine (but in order to gain any benefits, you will need at least two virtual machines)

__Did you know?__

You can also use (Local) Load Balancers in conjunction with a 
Global Load Balancer. This is useful if you have multiple 
machines in one zone and multiple machines in another zone. 
The Global Load Balancer can be used to join these two (or more) 
zones together in one easy step.

### Setup 

1. Click to __Servers__ > __Network__ and then click on the __Global Load Balancers__ sub-tab in the new page.

2. Click on the Create button to set-up a new Global Load Balancer.

3. Fill in the form:

	* __Domain__: The domain name (e.g. mydomain.com.au)
	* __Monitoring Port__: The port you wish to conduct health checks on to ensure the server is 'live' (e.g. 80 - Web Server)
	* __Algorithm__: This dictates how traffic is Load Balanced.
		* __Topology__: Traffic is geographically routed to its closest available server
		* __Round Robin__: Traffic is evenly distributed to all available servers.
	* __Servers or Load Balancers__:Here you need to select which servers or load balancers should be members of this Global Load Balancer. Use the dropdown menu and select your server or load balancer. Click __Add Another Server__ to add additional members.
	* Click __Save Load Balancer__ to commit the change.

__What happens now?__

Your domain will now be added into our Global Load Balancers as well as the DNS Management section.  The Global Load Balancers will monitor the health of your servers using the monitoring port you specified during setup.  The domain you specified in the setup section gets created as an ‘A’ record for each server in the pool, which the load balancers will load balance between using the selected algorithm. 

If you need to add additional records to the domain this can be done in the DNS Management section, however any records in the DNS Management section are not globally load balanced. If you have Globally Load Balanced mydomain.com.au and you need www.mydomain.com.au as well you will need to create a second global load balancer for the www.mydomain.com.au domain.  Alternatively, you could add a CNAME record for __www__.mydomain.com.au that refers to __mydomain.com.au__ in the __DNS Management__ section.

__What happens if I have a conflicting A record in the DNS Management section?__

The duplicate conflicting record will not have an effect as the Global Load Balancer is given priority before the DNS is queried. Meaning any and all changes relating to the Globally Load Balanced domains and their records need to be done on the __Global Load Balancers__ tab and not in the __DNS Management__ tab, as they will not appear in the __DNS Management__ section.

__How does this actually work?__

We use an extremely low TTL (Time-To-Live) on the A records on the provided domains to control where connections are sent based on the origin of the DNS request. While DNS records are usually set to a TTL time of 4 hours, we set it to the lowest possible time of __one second__. This allows us to direct incoming requests to servers that are constantly health-checked on the selected monitoring port.
