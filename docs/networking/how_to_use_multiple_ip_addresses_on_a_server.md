page_title:       How to use multiple IP addresses on a server
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to help users use multiple IPs on a server page_keywords:    server VPS IP multiple address

## Use multiple IP addresses 

### Setup

You may have already attempted to associate another static IP address to your virtual machine and found that the platform doesn't readily allow you to do this. Currently you can only associate ONE Static NAT address to a virtual machine and Ninefold is investigating methods of adding this feature down the track, but fear not - there is a method you can use to associate other IP addresses with the same machine.

_This article assumes you wish to have multiple IP addresses directed to your server. This could be useful for those who wish to host websites on their virtual machine and associate different SSL certificates with each IP address._

### Example of a single virtual machine with 3 IP addresses

| IP          | Rules                   | Type of IP                        |  
|-------------|-------------------------|-----------------------------------|
| 103.7.16x.1 | 80, 443, 22, 3389       | Static NAT                        | 
| 103.7.16x.2 | 80 => 8080, 443 => 4443 | Destination NAT (Port Forwarding) |     
| 103.7.16x.3 | 80 => 8081, 443 => 4444 | Destination NAT (Port Forwarding) |   


There are three IP addresses. One of which is a Static NAT, which means all the outgoing traffic from the machine will identify itself as 103.7.16x.1 and we also have two other IPs. While they are not Static NATs, they will forward data received at those ports to other ports specified.

In this example, any data sent to 103.7.16x.2 on Port 80, will be sent to the virtual machine's Port 8080. Meaning that if I was using IIS or Apache, I can tell it to serve another document or website to a request coming in on those Ports (e.g. 8080, 8081). A web user browsing on 103.7.16x.2 or even 103.7.16x.3 won't know the difference! To them they are getting the data as per normal without having to use Port numbers in the URL.

__Note: Please ensure you have setup your server to correctly listen on the above ports to serve content.__

### Use multiple static NATs with multiple NICs 

Ninefold will continue to try and improve on our features as well as bring out additional features. We hope to be able to allow Multi-Static NATs in the future but for now the above workaround can definitely assist users in deploying multiple websites (w/SSL certificates) or applications whilst utilizing a single virtual machine.
