page_title:       How to Deploy an App 
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users how to deplpy a Rails app on Ninefold 
page_keywords:    deployment ninefold rails deploy started start begin heroku 

## How to Deploy an App on Ninefold

#### Overview

Let us be the first to welcome you to Ninefold! You just found the easiest and best performing Rails hosting solution out here. Let's guide you through deployment (and throw Clippy out the window while we do it). 

If you are interesting in learning more about the magic is actually happening check out [this article](../apps/what_happens_and_what_gets_built_on_a_rails_app_deployment.md).

#### Getting Started 

After signup, you can click the 'Deploy Now' button (this appears on the front page if you haven't already deployed an App/Server to Ninefold or under the Apps tab as 'Deploy app' if you have).

##### Step 1

Ninefold will pull your code in from Github.com, Bitbucket.com, or from your private Git URL. 

For using a generic Git URL, supply the URL address and choose the branch you want to deploy. If it’s a private repo, you will need to copy the ssh key and add it to your repo. If it’s public, there isn’t a need for the SSH key. More info about repos can be found [here](how_ninefold_works_with_github_bitbucket_and_git_url.md).

##### Step 2

For the GitHub and Bitbucket deploys, we will ask you to sign in.

Boom! Time to select an organization, repository, and branch or release in the Specify your Repository step. 

##### Step 3

During this step, we run some validations checking: if the repository is a valid Rails repo, if you’re deploying with Postgres, or if you have the rails_12factor gem (which may adversely affect the stability of your app).

If you are bringing PG data over, importing across is easy. Check out our [KB article](exporting_and_importing_postgresql_data.md) on how to do that here.

Want to bring your own database that is hosted elsewhere or on one of our bare servers? Cool! Please follow these [instructions](../apps/deploying_a_rails_app_with_your_own_database.md) closely. 

In the next step, you will set up your app's infrastructure. It's a big step, so there's a lot more documentation here, but it is also really easy. Just choose the setup that best suits your needs. 

##### Step 4 

Last step - easy, but there's a lot going on. Here you will review your app configuration. When it looks good, you're ready to deploy.

That's it! Your deploy is in progress and you will be shown a page with some details about the process. You can navigate away from this page once the deployment has kicked off. 

Once the infrastructure has been built, you should be able to view the app deployment logs, which will update in realtime.

While your app is deploying, we recommend you install the Ninefold CLI to manage your Rails app. Instructions can be found [here](how_to_install_and_utilize_the_cli.md).

Any further questions ondeployment can be directed to our live chat below, or you are welcome to log a ticket in the Ninefold dashboard.