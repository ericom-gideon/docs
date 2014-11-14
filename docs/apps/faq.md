page_title: Server FAQ
page_author: Risa
page_description: Knowledge base FAQ for app servers
page_keywords: faq apps rails questions documentation

## Apps

#### What is a Procfile?

As a part of the app deploy process, we look for a Procfile and we'll generate services for your process types with Foreman. The Procfile describes processes that are required for your application to run. This is handy for running a background worker pool if you select to include “Redis for Resque or Sidekiq”.

NOTE:  We specifically exclude web process types in the Procfile as we run our own web process via Apache 2 and Passenger.

##### Do I need a Procfile?

You only need a Procfile if you include the “Redis for Resque or Sidekiq” add-on via the app deploy process.

##### How do I make a Procfile?

An example Procfile looks like this and it goes in to your Rails app's root directory along with your Gemfile and Rakefile.

  scheduler: bundle exec rake resque:work QUEUE=*

  worker: bundle exec rake resque:scheduler QUEUE=*

##### Are Procfiles only used for the Ninefold app deploy process?

Procfiles came into existence with the gem Foreman, written by David Dollar. More information can be found in the following article: [Procfiles by David Dollar](http://blog.daviddollar.org/2011/05/06/introducing-foreman.html).

#### How do I roll back my app to another version?

You can’t rollback using Ninefold’s UI. You will need to rollback using Git. It’s pretty involved. Here is a good [article on StackOverflow](http://stackoverflow.com/questions/4372435/how-can-i-rollback-a-github-repository-to-a-specific-commit) on how to do it.

#### What can I do to ensure uptime?

We recommend using New Relic, PagerDuty or Pingdom for monitoring.

#### How long does it take Ninefold to get up to date with a new Rails release?

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

We always support the latest version of Ruby as well as several older versions.  The following are versions are available for deployment:

* 2.1.5
* 2.1.4
* 2.1.3
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

    # Sample Gemfile declaration

    source 'https://rubygems.org'
    ruby '2.1.5'

#### How do I manage GitHub SSH keys?

You're working on a client's app and have access to their repository. You attempt deployment through Ninefold and BAM! Something breaks. You can't deploy because we can't add an SSH key to that repo. What happened?

As a member of an organization, you may have push and pull access to a repo. However if you don't have administrative rights to it, Ninefold cannot deploy your app because we cannot add an SSH key to the repo.

The owner of the organization must grant you administrative rights for that particular repo. Once Ninefold adds the public SSH key to the repo, administrative rights may safely be revoked again without affecting deployment in the future. We only need to add the key once.

Our recommendation is to create a general account on Github for use with our portal. This will allow for instances when a person with authorization access leaves the company. All new users who have admin access to the repo will have to authorize their Github accounts by stepping thru the deploy process to authorize and then hopping out.

If you don't require the post-commit hooks, you can use the git URL approach and add the SSH key to your repo.

#### How do I access my app's logs?

We have a great KB about our logs. Check it out [here](../getstarted/how_to_utilize_ninefold_logging.md)

#### Does Ninefold support multiple environments?

You may find a need to set up multiple environments for your apps, such as staging and production. This is easy to do with Ninefold. All you will have to do is build and deploy a new app for each environment. Read on to know more.

##### Branch-based deployments

Ninefold uses branch-based deployment. This makes it easier for the developer to choose which branch to deploy against. Got a production branch? Perfect, you can deploy against that. And a staging branch? Absolutely. You can deploy as many apps as you'd like, one for every branch and then some! And when code revisions are made, commit and push each branch as normal, and Ninefold will auto-deploy those changes for those particular branches.

##### Production vs. Staging

So what's the difference between production and staging? Production is the instance your customers interact with. Your staging environment is just like production, but with some key differences like database size or speed. For all intents and purposes, it is like the dress rehearsal. Because of that, if it accidentally goes down during load tests or final tests before pushing to production, your actual front-facing app won't be affected.

##### Power at your fingertips

On Ninefold, your production app may have multiple app servers and multiple database servers to handle all your customers and their requests. Your staging may not need as much and can be built on a much smaller scale.

Because Ninefold is a pay-as-you-go service, you can ramp up/down your servers according to your needs. This means that during load testing, you can scale your staging app to match your production app to run your tests. Once you've finished, you can ramp back down.

#### Will Ninefold ever make any changes to my codebase?

We will let you know when we will be accessing your account and will not make any changes without your knowledge.

The only reasons we would access your accounts would be:

* You've come onto chat to ask us a question about your application and need help.
* You've opened up a support ticket. We'll contact you to ask for permission before doing anything.

For any code changes, we will ask you to change and commit them so that we can automatically redeploy your app.
