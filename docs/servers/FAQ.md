page_title: Server FAQ
page_author: Risa
page_description: Knowledge base FAQ for servers
page_keywords: faq servers questions documentation

## Servers

#### Does Ninefold block any server ports by default?

When you create a new virtual server, we block all ports by default except the following:

* 22 (SSH) 
* 25 (SMTP)
* 80 (HTTP)
* 443 (HTTPS)

You are able to open / close which ports you require in the firewall rules section of the network tab of your deployed server.

Note: IP Protocol 47 (GRE) is currently blocked and thus any specific applications that rely on this particular protocol (e.g. PTPP VPN) is unable to operate on the new platform at present.

#### How do I setup a reverse DNS (PTR) record for my IP address?

To have a PTR record added for an IP address you are using, you simply need to file a ticket with the following information:

* Virtual machine name
* External IP address (e.g. 103.7.x.x)
* FQDN (Fully Qualified Domain Name) you wish to associate with the IP address (e.g. mx.mydomain.com)
* Reason (e.g. My mail server requires this ...)

Note: You also should be using the above IP address as a static NAT or the virtual machine will not be identifying itself with the correct IP address. Port forwarding will not work.

#### What is a Ninefold template?

A Ninefold template is a Ninefold created and vetted virtual server image, consisting of a specific operating system and configuration.

You also have the ability to create your own templates, based on any of your existing running virtual servers.

#### What time standard does Ninefold use?

As our virtual servers are completely unmanaged, you can set the clock to the time and timezone of your choosing.
