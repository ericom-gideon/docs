page_title: 			Adding SendGrid to your Rails app
page_author:      Brittany Martin
page_description: Knowledge base article on how to create/add a Sendgrid account on Ninefold
page_keywords: 		SendGrid email account add-on mail rails

## Adding SendGrid to your Rails app

#### Why SendGrid for your emailing needs

Easing developer pains is the core similarity between Ninefold and [SendGrid](www.sendgrid.com). Ninefold does this with simple Ruby on Rails hosting, while SendGrid takes care of everything email. That's why Ninefold is proud to name SendGrid as one of our add-on partners.

#### Ninefold + SendGrid: How it works

Partner? What does that mean? This means during your Ninefold Rails app deployment, we give you the opportunity to create a free SendGrid account and populate your SendGrid secret key into your app's configuration.

Already have an account? Fantastic! You can plug your existing credentials into Ninefold on your initial deployment or your subsequent redeployments.  

If you end up going over SendGrid's free plan (currently 200 emails per day), you will be billed by SendGrid separately.

#### Adding SendGrid to your Rails app

__On Initial Deployment__

On Step 4 of the app deployment process, you will see the option to add SendGrid underneath the __Add-ons__ section. Checking that box means that Ninefold will reach out to SendGrid to create a new account under your Ninefold email address. If successful, Ninefold will add your:

	SENDGRID_USERNAME:
	SENDGRID_PASSWORD:

to the __Environment Variables__ section. 

__On Redeployment__

Adding email functionality to your Rails app after deploying with us? Easy. Go to your app on the Ninefold dashboard, click on the __Configuration__ tab, scroll to __Current Settings__ and _create one for free_ or enter in your existing Sendgrid username and password. This will require a redeploy for it to take effect once you click __Enable__.

__Adding SendGrid/email functionality to your code__

It is up to you, the mighty developer, to add the SendGrid env vars and config to your Rails app. If you are new to SendGrid, we recommend checking out this great [documentation](https://sendgrid.com/docs/Integrate/Frameworks/rubyonrails.html) from them. Happy emailing!

Have a question about generating a SendGrid account from Ninefold? Feel free to visit us on chat or file a support ticket via the Ninefold dashboard.
