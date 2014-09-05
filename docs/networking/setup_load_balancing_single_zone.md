page_title:       DNS management for servers
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to help users setup load balancing for servers 
page_keywords:    server load balance network zone  

## Setup Load Balancing (Single Zone)

### Overview 

Load balancing is a computer networking methodology to distribute workload across multiple computers or a computer cluster, network links, central processing units, disk drives, or other resources, to achieve optimal resource utilization, maximize throughput, minimize response time, and avoid overload. Using multiple components with load balancing, instead of a single component, may increase reliability through redundancy.

### Requirements

Minimum 2 servers deployed on Ninefold with a public IP (each located in the same zone).

All Servers setup with a form of web server or common listening port
 
### Setup

1. To begin, please login to your Ninefold account.

2. Click on __Servers__ > __Network__.

3. Click on the __Local Load Balancers__ tab.

4. Click __Next__ to __Load Balancers__.

5. Here, you will need to input:

	* A name for the load balancer

	* The incoming Public port

	* The destination Private Port

	* The Zone where your servers are located.

6. Now, select your servers from the dropdown list.

7. When done picking the servers you want, click __Save__.
