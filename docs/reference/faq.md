page_title: FAQ
page_description: Most frequently asked questions
page_keywords: faq, questions, documentation

## General 

#### How do I check the status of the Ninefold platform?

You can view service availability and upcoming maintenance plans at [status.ninefold.com](http://status.ninefold.com).

The status page is updated at the start and finish of any maintenance period as well as during any platform interruption.

We recommend that you log a support ticket if you experience availability or performance issues in addition to checking the service health page.

#### Can I contact support by phone?

You can log a ticket 24/7 through the portal for accounts, enquiries and technical issues.

Country        | Telephone Contact 
:------------- | :---------------: 
United States  | 855 896 5858
Australia      | 1300 045 614
Other          | +61 2 8221 7745

#### How do I log a support ticket?

Log into your Ninefold account and select the drop down under your username (top right hand corner of the window).

Select tickets from the drop down list then choose create ticket.

Choose a category that we can help you with then populate the subject and description fields with content relating to your issue or query. You have the option to include a contact phone number (don't forget your area code!). Click the create ticket button.

Once your ticket has been submitted you will see it every time you visit it the support tab.

By clicking on an open ticket you are able to review comments from our support team, add additional comments or close the ticket.

#### Can you help with non-standard support requests?

In some cases you may request that the Ninefold team perform a function or service which is not part of our standard offering. 

Examples include:

* Copying of cloud data to a portable disk
* Uploading of data from a portable disk
* System administrator tasks
* Data Recovery
* Virtual Machine import/export
* Password recovery

These services will be agreed prior to commencement.  We charge a rate of up to $800 excluding taxes per day plus or any part thereof. Any services are performed according to point 8 of our [Terms of Use](https://ninefold.com/terms-of-use/).

## App Promotion

#### If I have two or more apps do I get the discount for each one?

I see what you did there… no. One discount per customer only.

#### If I close my account and open it later do I still get the discount?

The promotion will only apply to accounts with active apps during the promo period. If you close your account and open another one while the offer is still on and deploy an app then you are in luck. If not, it will only apply to the original account (you don’t need to close your account, just spin down your resources).

#### I don’t have an app, I run virtual servers, how do I get involved?

You need to deploy an app to take advantage of this promotion. Now could be a great time to get into Ruby on Rails!

#### What if I pick another region?

The $50 applies to your account for the month regardless of region. Say what? Lets go with an example, if you have something in US West and something in Asia Pacific 1 the $50 comes off the total of the Ninefold services for that month.

## Apps

#### How do I roll back my app to another version?

You can’t rollback using Ninefold’s UI. You will need to rollback using Git. It’s pretty involved. Here is a good [article on StackOverflow](http://stackoverflow.com/questions/4372435/how-can-i-rollback-a-github-repository-to-a-specific-commit) on how to do it.

#### What can I do to ensure uptime?

We recommend using New Relic, PagerDuty or Pingdom for monitoring. Setting up load balancing will also help in optimizing resource utilization. 

#### How long does it take Ninefold to get up to date with a new Rails releases?

It is up to the customer to update their gem file to the newest Rails gem. When they deploy, their hosted app is updated.

Ruby-wise: Ninefold maintains packages of the latest versions of Ruby to make sure you’re always up to date.

#### What time standard does Ninefold use?

All our Rails app and database servers are set to UTC.

##### Why UTC?

UTC is Coordinated Universal Time, and is unaffected by things like daylight savings or summer time.

UTC is our standard for all app logging, cron jobs, and backups. We also use UTC to avoid confusion about time zones. This means that when you set your cron job to run at 10:05pm every night, it will be run at 10:05pm UTC.

##### What about the virtual servers?

As our virtual servers are completely unmanaged, you can set the clock to the time and timezone of your choosing.

#### Does Ninefold spin down my instance if it isn't used?

Ninefold does not spin-down your instance if it isn't used. The only time Ninefold will ever spin down your instances is if:

* You ask us nicely.
* You haven't paid your bills.
* You haven't verified your email address within 24 hours (when you first create your account).
* You violated the Terms and Conditions (or any other of Ninefold's policies) and/or a legally enforceable request is made.
* In most (if not all) circumstances we have done everything we can to contact you to ensure you are aware before any action is taken against your instances, so ensure you keep your contact details up-to-date!

#### Does Ninefold support Node.js in Rails app deploy?

Ninefold app deploy is focused on Ruby on Rails and not Node.js.

By default, Node.js is installed on a server for asset pre-compilation. Its use is not intended for customers, and as such, Ninefold does not provide support regarding Node.js.

Our suggestion for those interested in utilizing Node.js is to deploy a bare virtual server and install the environment on to it. From there you may configure your rails application to communicate with the virtual server hosting your Node.js server.

#### What Ruby versions does Ninefold support?

We always support the latest version of Ruby as well as serveral older versions.  The following are versions are available for deployment:

* 2.1.2
* 2.1.1
* 2.1.0
* 2.0.0 (multiple patch levels)
* 1.9.3 (multiple patch levels)

#### What happens if my app changes Ruby version?

If you change the Ruby version of your app, you will need to redeploy. This can be done by going to your App > Configuration (tab) > Edit (Ruby version) > choose the correct Ruby version > Update > Redeploy now.

If your app requires an unsupported version of Ruby, please contact support to let us know.

##### Introspection and Ruby versions

When you deploy an app on Ninefold, we check your Gemfile for your application's Ruby version, so that you don't have to select it from the drop-down.   If you do not have a ruby version defined in your Gemfile we will default to the latest released version we support. 

	Sample Gemfile declaration
	
	source 'https://rubygems.org'
	ruby '2.1.1'

#### How do I manage GitHub SSH Keys?

##### Adding GitHub SSH Keys to Client Accounts

You're working on a client's app and have access to their repository. You attempt deployment through Ninefold and BAM! Something breaks. You can't deploy because we can't add an SSH key to that repo. What happened?

As a member of an organization, you may have push and pull access to a repo. However if you don't have administrative rights to it, Ninefold cannot deploy your app because we cannot add an SSH key to the repo.

##### A few options

The owner of the organization must grant you administrative rights for that particular repo. Once Ninefold adds the public SSH key to the repo, administrative rights may safely be revoked again without affecting deoloyment in the future. We only need to add the key once.
Create a general account on Github for use with our portal. This will allow for instances when a person with authorization access leaves the company.
If you don't require the post-commit hooks, you can use the git URL approach and add the SSH key to your repo.

#### How do I access my app's logs?

Sometimes your app won't deploy properly. Never fear! There's a way to check out what went wrong.

You can view your most recent logs by clicking on your App > Logs (tab). From here you can select a source - this has a list of the different logs we keep.  You can also install the ninefold gem and access your log files via the command line as well.

* All: All logs, the default setting. Sometimes you will get lucky and see your error immediately displayed here.
* Asset: Log of assets, precompilation, etc. Check here for CSS/JS related errors. By default Ninefold does asset precompilation.
Bundler: Log of 'bundle install.' Check here if you suspect a gem wasn't installed.
* Cheflog: Log output of when we deploy your app. Check here for any errors if your deploy doesn't finish.
* Migration: Log of when db:migration is run. Rake is aborted if any issues during migration occur.
* Rails: This is the same kind of output as running 'rails server' on your local machine.
* Syslog: Log of extra information such as cron tasks.
* Trigger: Log of pre- and post-migration hooks. If they did not run, check here.

#### What is a Procfile?

As a part of the app deploy process, we look for a Procfile and we'll generate services for your process types with Foreman.The Procfile describes processes that are required for your application to run. This is handy for running a background worker pool if you select to include “Redis for Resque or Sidekiq”. 

NOTE:  We specifically exclude web process types in the Procfile as we run our own web process via Apache 2 and Passenger.

##### Do I need a Procfile?

You only need a Procfile if you include the “Redis for Resque or Sidekiq” addon via the app deploy process.

##### How do I make a Procfile?

An example Procfile looks like this and it goes in to your Rails app's root directory along with your Gemfile and Rakefile.

	scheduler: bundle exec rake resque:work QUEUE=*

	worker: bundle exec rake resque:scheduler QUEUE=*

##### Are Procfiles only used for the Ninefold app deploy process?

Procfiles came into existence with the gem Foreman, written by David Dollar. More information can be found in the following article: [Procfiles by David Dollar](http://blog.daviddollar.org/2011/05/06/introducing-foreman.html).

#### Does Ninefold support multiple environments?

You may find a need to set up multiple environments for your apps, such as staging and production. This is easy to do with Ninefold. All you will have to do is build and deploy a new app for each environment. Read on to know more.

##### Branch-based Deployments

Ninefold uses branch-based deployment. This makes it easier for the developer to choose which branch to deploy against. Got a production branch? Perfect, you can deploy against that. And a staging branch? Absolutely. You can deploy as many apps as you'd like, one for every branch and then some! And when code revisions are made, commit and push each branch as normal, and Ninefold will auto-deploy those changes for those particular branches.

##### Production vs. Staging

So what's the difference between production and staging? Production is the instance your customers interact with. Your staging environment is just like production, but with some key differences like database size or speed. For all intents and purposes, it is like the dress rehearsal. Because of that, if it accidentally goes down during load tests or final tests before pushing to production, your actual front-facing app won't be affected.

##### Power at your Fingertips

On Ninefold, your production app may have multiple app servers and multiple database servers to handle all your customers and their requests. Your staging may not need as much and can be built on a much smaller scale.

Because Ninefold is a pay-as-you-go service, you can ramp up/down your servers according to your needs. This means that during load testing, you can scale your staging app to match your production app to run your tests. Once you've finished, you can ramp back down.

#### Will Ninefold ever make any changes to my codebase?

We will let you know when we will be accessing your account and will not make any changes without your knowledge.

The only reasons we would access your accounts would be:

* You've come onto chat to ask us a question about your application and need help.
* You've opened up a support ticket. We'll contact you to ask for permission before doing anything.

For any code changes, we will ask you to change and commit them so that Ninefold can automatically redeploy your app.

## Servers

#### Does Ninefold block any server ports by default?

When you create a new virtual server, we have every TCP and UDP port blocked by default.

You are able to open which ports you require in the firewall rules section of the network tab of your deployed server.

Note: IP Protocol 47 (GRE) is currently blocked and thus any specific applications that rely on this particular protocol (e.g. PTPP VPN) is unable to operate on the new platform at present.

#### How do I setup a reverse DNS (PTR) record for my IP address?

To have a PTR record added for an IP address you are using, you simply need to file a ticket with the following information:

* Virtual Machine Name
* External IP address (e.g. 103.7.x.x)
* FQDN (Fully Qualified Domain Name) you wish to associate with the IP address (e.g. mx.mydomain.com)
* Reason (e.g. My mail server requires this ...)

Note: You also should be using the above IP address as a static NAT or the virtual machine will not be identifying itself with the correct IP address. Port Forwarding will not work.

#### What is a Ninefold template?

A Ninefold template is a Ninefold created and vetted virtual server image, consisting of a specific operating system and configuration.

You also have the ability to create your own templates, based on any of your existing running virtual servers.
