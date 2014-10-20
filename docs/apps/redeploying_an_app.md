page_title: Redeploying a Rails App
page_description: Knowledge base article to instruct users on the different methods of redeploying an app
page_keywords: redeploy redeployment webhook cli 

## Redeploying an app

#### Overview

Ninefold has four (count 'em...four!) ways to redeploy your Rails app.

1. Auto redeployment from GitHub/Bitbucket repo
2. Manual redeployment from the Ninefold dashboard
3. Triggering redeployment via Ninefold deployment URL
4. Triggering redeployment via a CLI command

_Redeployments occur across all servers in your application, including any database servers._

#### Auto redeployment

When you commit a change to your repo (same branch as your Ninefold deployment) and you have the __Automatically redeploy my app when I push updates to my code__ checked off in the Overview tab of your app, that will trigger a redeploy on Ninefold. 

#### Manual redeployment via the Ninefold dashboard 

It is also possible to manually redeploy your application by clicking on the redeploy button on any tab within your app on the Ninefold Portal. 

_You may notice that there is a drop-down option to force redeploy. Think of this as a clean state.  Rather than running any new migrations and making changes to the existing code, this option will completely redeploy the code from Github, running any pre- or post-migration code you may have specified and re-running all of your migrations.  This option may take longer than a standard redeploy and it will cause an outage to your users for the duration of the deployment. The duration of a force deploy depends on the size of your app (in particular how many gems there are to install) but will be close to the time of your initial deployment._

#### Deployment URL

This is a great option when incorporating continuous integration (CI).

1. Click on your existing app's overview page.
2. Copy the deployment URL and enter the curl command ($ curl -X POST [Deployment URL]) into your CI when your tests pass.

You will now see your app redeploying!

To reset the URL:

1. Go to your existing app's overview page
2. Click reset button (beside deployment URL). A new URL will be generated.

#### CLI redeployment

Already use and love our CLI? Proceed after you run:

	$ gem update ninefold

If not, check the article on how to install and utilize our CLI.

Follow the setup instructions above and then open Ninefold’s CLI from your command line.

	$ ninefold app redeploy

If you want to have your CI tool automatically trigger a redeployment, you can also use the CLI for this.  

	$ ninefold app redeploy_command

This will give you the command and AUTH_TOKEN necessary to trigger a redeployment that you can insert into any scripts to help you automate redeployments (with passing tests, of course).
