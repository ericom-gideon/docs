page_title: Adding Sendgrid to Your Rails App
page_description: Knowledge base article on how to create/add a Sendgrid account on Ninefold
page_keywords: Sendgrid email account add-on mail rails

## Adding Sendgrid to Your Rails App

#### Why Sendgrid for Your Emailing Needs

Easing developer pains is the core similarity between Ninefold and [SendGrid](www.sendgrid.com). Ninefold does this with simple Ruby on Rails hosting, while SendGrid takes care of everything email. That's why Ninefold is proud to name Sendgrid as one of our add-on partners. 

#### Ninefold + Sendgrid: How it Works

Partner? What does that mean? This means during your Ninefold Rails app deployment, we give you the opportunity to create a free Sendgrid account and populate your Sendgrid secret key into your app's configuration. 

Already have an account? Fantastic! You can plug your existing credentials into Ninefold on your initial deployment or your subsequent redeployments.  

If you end up going over Sendgrid's free plan (currently 200 emails per day), you will be billed by Sendgrid separately. 

#### Adding Sendgrid to Your Ninefold Rails App

__On Initial Deployment__

On Step 4 of the app deployment process, you will see the option to add Sendgrid underneath the __Add-ons__ section. Checking that box means that Ninefold will reach out to Sendgrid to create a new account under your Ninefold email address. If successful, Ninefold will add your:

	SENDGRID_USERNAME:
	SENDGRID_PASSWORD:
	
to the __Environmental Variables__ section. 

__On Redeployment__

Adding email functionality to your Rails app after deploying with us? Easy. Go to your app on the Ninefold Portal, click on the __Configuration__ tab, scroll to __Current Settings__ and _create one for free_ or enter in your existing Sendgrid username and password. This will require a redeploy for it to take effect once you click __Enable__. 

__Adding Sendgrid/Email Functionality to Your Code__

It is up to you, the mighty developer, to add the Sendgrid env vars and config to your Rails app. If you are new to Sendgrid, we recommend checking out this great [documentation](https://sendgrid.com/docs/Integrate/Frameworks/rubyonrails.html) from them. Happy emailing!

Have a question about generating a Sendgrid account from Ninefold? Feel free to visit us on chat or file a Support ticket via the Ninefold portal. 

