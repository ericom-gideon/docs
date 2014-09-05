page_title:       DNS management for servers
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to manage DNS for bare servers. page_keywords:    server volume network DNS domain godaddy 

## DNS Management for Servers

### Overview

You can now use Ninefold to host your Domain Names. This enables you to leverage the full power of Multi-Zone Global Load Balancing, whilst maintaining the full use of your domain names for other services such as mail.

### Setup

1. Simply go to __Network__ under the __Servers__ tab in the menu bar.

2. Then click on the __DNS__ tab.

3. To create __DNS__ records, simply click __Create__, enter the __Domain name__ & click __Next__.

4. This has now created the domain in the Ninefold hosted DNS service. To add a DNS record, click __Add another record__ button.

5. Enter the DNS record details as follows:

	* Enter a "Name" - this is the hostname.
	* Select the type of record - A Record, CNAME Record, MX Record, TXT Record, or NS Record.
	* Enter the "Content" - this is the IP address you wish to point the DNS record to
	* Enter a TTL - Time To Live for the DNS record refresh
	* Enter a priority - defaults to 1
	* Click __Update__ to save & activate the new DNS record.