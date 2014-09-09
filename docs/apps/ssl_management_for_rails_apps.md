page_title:       SSL for Rails apps
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users on how can manage the SSL for their Rails app 
page_keywords:    ssl certificate open rails app signed intermediate

## SSL for Rails apps 

#### What is SSL?

SSL is a means by which connections over the web are encrypted with cryptographic protocols for securing information. When an app or website has been properly setup with an SSL certificate, the beginning of the URL will be https:// with the s meaning secure. Depending on the source of the certificate and other factors, these websites should be more trustworthy than non-secured sites. 

#### Do I need SSL?

SSL is a great starting point for web security and can help assuage customers concerns on data privacy. Not every application needs SSL, but if you have sensitive data being transmitted to and from your web app, it might be worth investing in an SSL certificate. 

#### How do I get an SSL certificate?

There are two methods by which an SSL certificate may be obtained; self-signed, or signed by a CA – a trusted third party website. 

_Note: self-signed certificates are the easiest method to get started with SSL, but they also don’t bear the same well-established trust relationships than do certificates signed by companies such as VeriSign or GeoTrust. Please note that self-signed certificates are best used only for development environments._

#### Enabling SSL for your app:

Navigate to the __Configuration__ tab of your app. 

Underneath the Ruby version in Settings you will see an __SSL option__ with an __Enable__ button on the right. Clicking this button will take you to the __Edit SSL page__.

_Self Signed Certificate_

Using a self-signed certificate doesn't require any additional steps.  Just click “Use a self-signed certificate” and then save. Re-deploy your app and you’re done!

_Add your own SSL_

Using a certificate that has been signed by a third-party will require you to create your own certificate and have it signed.  To create a certificate, you will need to generate a private key. Open a terminal on your local machine and type:

	openssl genrsa -out mykey.key 2048

then generate the CSR (certificate sign request) using your private key:

	openssl req -new -key mykey.key -out mycsr.csr

Once you have your CSR, visit any Certificate Authority and submit your CSR for signing.

Now you can come back to this menu, select __Add your own__, and you'll get a panel that will ask for your __certificate__, __certificate private key__ and your __intermediate certificates__ (optional).

Enter your details, click save, redeploy your app, and you’re done!
