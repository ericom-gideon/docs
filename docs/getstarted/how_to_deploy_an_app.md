page_title: How to Deploy an App 
page_author: Brittany Martin
page_description: Knowledge base article to instruct users how to deploy a Rails app on Ninefold 
page_keywords: deployment ninefold rails deploy started start begin heroku 

## How to deploy an app 

Let us be the first to welcome you to Ninefold! You just found the easiest and best performing Rails hosting solution out here. Let's guide you through deployment (and throw Clippy out the window while we do it). 

If you are interested in learning more about the magic that is actually happening check out [this article](../apps/what_happens_and_what_gets_built_on_a_rails_app_deployment.md).

##### 1 Source

Time to select an organization, repository, and branch/release. 

Ninefold will pull your code in from GitHub, Bitbucket, or from your private Git URL. During this step, we run some validations checking: if the repository is a valid Rails repo, if you’re deploying with Postgres, or if you have the rails_12factor gem (which may adversely affect the logging for your app).

For using a generic Git URL, supply the URL address and choose the branch you want to deploy. If it’s a private repo, you will need to copy the ssh key and add it to your repo. If it’s public, there isn’t a need for the SSH key. More info about repos can be found [here](how_ninefold_works_with_github_bitbucket_and_git_url.md).

Do you want us to automatically redeploy your app when you push updates to your branch from Github or Bitbucket? Keep this at the default __Yes__. 

##### 2 Configure

Here is where you will choose your app infrastructure and region. 

Ninefold has 4 app infrastructure choices: 

* __Development__ 
	* 	Development setup (low traffic, seed data)
	* 	Combo box where the web, db and worker share an instance
	
* __Staging__
	* 	Staging setup (low traffic, real data, replicates prod)
	*   Dedicated server for web, db and worker

* __Production__
	*   Production setup (higher traffic, making $$, real data) 
	*   Dedicated server for web, db and worker	
* __Custom__
    * Perfect for [bringing your own database](http://help.ninefold.com/apps/deploying_a_rails_app_with_your_own_database/) or any custom setup desired	

We will initally set __RAILS_ENV=production__ regardless of what setup is chosen. This setting can be changed in the next step. 

If a worker is chosen (dedicated or not), we will automatically install Redis. 

##### 3 Details

Time to name your application, choose a Ruby version (if needed), and add any environment variables. Check off any free add-ons to be included in your app. Last but not least, add any before and after migration triggers. Utilize these trigger points to provide bash scripts if required.

##### Deploy!

Now Ninefold is going to build your infrastructure, deploy the app and verify the deployment. Once the app enters into deployment, a __Deployment log__ will appear so you can watch the wonder that is Ninefold. 

While the app is deploying, Brutus the yak recommends installing the [Ninefold CLI](how_to_install_and_utilize_the_cli.md) on your local machine. 
