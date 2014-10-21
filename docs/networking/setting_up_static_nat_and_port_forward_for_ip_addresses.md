page_title:       Setting up static NAT & port forward for IP addresses
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users on they can set up static NAT and port forwarding page_keywords:    server volume network NAT port forwarding IP static

## Static NAT & port forward 

Under the Network tab you are able to manage any IP addresses that are currently in use. Ninefold currently provides two methods of associating a public IP address with your server.

#### Choice 1: static NAT 

IP addresses are mapped one-to-one directly to a server. The particular IP address associated with a Static NAT rule is associated with a particular server.

#### Setting up static NAT

1. Go to the __Network__ Tab in the Ninefold dashboard. 

2. If you do not currently have an available public IP address, click __Acquire NEW IP__ button.

3. Select the region where you wish to acquire the IP address & click __Create IP Address__ button.

4. You will now see the IP address appear under __Un-Assigned IP addresses__.

5. To create a static NAT using this IP address, select the __Assign Server__ button, select the server & click __Assign Server to IP address__. This IP address will now appear under the "Static NAT" section.

6. To create specific port rules for this IP address to the server, click the __Firewall Rules__ button and start creating rules.

7. Enter a port number, choose the specific protocol and click "Add" button.  Note: By default, all ports are closed unless a specific rule is created.

Your ports are now mapped to your server via the public IP address via Static NAT.


#### Choice 2: destination NAT 

IP addresses allow you to create port forwarding rules to specific servers. The particular IP address associated with a Destination NAT rule can be associated with multiple servers (different ports across different servers).
 
#### Setting up destination NAT 

1. Go to the __Network__ Tab in the Ninefold dashboard. 

2. If you do not currently have an available public IP address, click __Acquire NEW IP__ button.

3. Select the region where you wish to acquire the IP address & click __Create IP Address__ button.

4. You will now see the IP address appear under __Un-Assigned IP addresses__. To create a port mapping, click the "Port Mappings" button.

5. Create the port rules you require, assign to sever and click __Add__. The Port Rules are now created for that public IP address and mapped to the appropriate server(s).
