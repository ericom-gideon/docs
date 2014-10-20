page_title: How to enable Ninefold Net
page_description: How to enable Ninefold Net
page_keywords: interzone

## Enable Ninefold Net

By default, servers created in a region make use of their own, private VLAN. If you would like the ability to link the servers in your account across multiple regions, you must first enable Ninefold Net.

Ninefold Net enables servers in different regions to communicate with each other. When this feature is enabled it creates an additional private network which will be available to any new servers you create. You cannot disable this feature once enabled.

To enable, select "Servers" -> "Resources" from the dashboard.
Click on Enable Ninefold Net.

Please note; any existing servers won't be able to take advantage of the Ninefold Net. It is necessary to template and re-deploy any existing servers should they need the ability to communicate with servers in other Availability Zones.
 
Tip: Enabling this feature is free and traffic between regions is free
 
#### Ninefold Net IP info

Once the Ninefold Net is enabled, any subsequently built servers will be connected to this network automatically. Ninefold Net IP information can be found under the "Network" tab of any given server.
