page_title:       How to delegate your domain to Ninefold
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to help users delegate their domain to Ninefold
page_keywords:    server VPS domain nameserver DNS godaddy netregistry 

## Delegate your domain 

If you would like to take advantage of Ninefold's DNS management service or global load balancing service you will need to delegate your domain to Ninefold's nameservers.

Depending on the domain registrar (e.g. GoDaddy, CrazyDomains and NetRegistry) you have purchased/manage your domain on, this can involve some changes and configuration to be conducted on their respective panels or by their support team.

Your domain should be pointing to the following Nameservers:

| Domain           | IP             | 
|------------------|----------------|
| ns3.ninefold.com | 103.7.166.250  |   
| ns4.ninefold.com | 103.7.165.250  |   
| ns5.ninefold.com | 198.89.105.250 |  

Please consult with your domain registrar for information on how you can point your domain to Ninefold's nameservers.

__WARNING: If your website or domain is currently in use, you should take care not to delegate the domain without properly and adequately setting up your DNS beforehand. DNS changes can take up to 48hrs to propagate, so a mistake or poorly configured DNS records or settings can have some serious consequences.__
