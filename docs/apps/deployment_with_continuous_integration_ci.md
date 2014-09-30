page_title:       Deployment With Continuous Integration (CI)
page_author:      Risa B. (converted by Britt)
page_description: Knowledge base article to instruct users on how to implement CI in their Ninefold Rails app
page_keywords:    CI continuous integration travis circleci magnumci jenkins testing

## Deployment with continuous integration (CI)

As developers, we are keen on certain processes such as continuous integration, because it works and it’s handy! As defined by Thoughtworks, "Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

By integrating regularly, you can detect errors quickly, and locate them more easily.

With Ruby on Rails development, we tend to use tools such as Travis CI, Circle CI, Jenkins CI, and Magnum CI (amongst others).

With Ninefold, you can totally set up your CI to deploy your code to Ninefold after it runs your tests.

_But wait, what about autodeploy?!_

Well, we can’t have our cake and eat it, too, can we? If you deployed via the GitHub or Bitbucket option, you will have to remove the __Automatically redeploy my app when I push updates to my code__ from the __Overview__ tab of your app. 

And if you didn’t have that option checked, that’s totally cool -- you’re one step ahead of the game!

You’ll need to know which CI you’re using. ...We can’t help you there. :)

But, this is your lucky day! Once you pick a CI to use, we give you a whopping two options to choose from to obtain a redeployment trigger when your CI succeeds!

#### #1 CLI deployment command

You’ll also need the deploy command given by our awesome CLI.  (If you haven’t set it up, check out the directions [here](http://www.ninefold.com/docs/getstarted/how_to_install_and_utilize_the_cli).)  Make sure to put the Ninefold gem into the Gemfile and run bundle.

	$ ninefold signin
	$ ninefold app redeploy_command

The output will look something like: 

AUTH_TOKEN=(hash) APP_ID=(number) ninefold app redeploy --robot --sure

The general idea is that if you push to the git repository, the CI environment will kick off and run your tests. Once the tests pass, the CI will then kick off your Ninefold deployment.

Each CI environment sets it up slightly differently, but they all will use the redeploy_command seen above.  

Note: You may have to add in "bundle exec" before ninefold: 

AUTH_TOKEN=(hash) APP_ID=(number) bundle exec ninefold app redeploy --robot --sure

#### #2 Deployment URL

Login into the Ninefold Portal and click on your existing app's Overview tab. Copy (or Reset) the Deployment URL. Enter the curl command ($ curl [Deployment URL]) into your CI when your tests pass.

#### How redeploying via CI works

The general idea is that if you push to the git repository, the CI environment will kick off and run your tests. Once the tests pass, the CI will then kick off your Ninefold deployment.

Each CI environment sets it up slightly differently, but they all will use the redeploy_command or Deployment URL seen above for redeploying your app on Ninefold.

__Travis CI__

If you’re using Travis CI, they have some awesome documentation on their site on how to use Ninefold. Check it out [here](http://docs.travis-ci.com/user/deployment/ninefold/)!

__Circle CI__

With Circle CI, it is best to put your AUTH_TOKEN and APP_ID in as environment variables. Add these in the settings page of Circle CI.  Then in the circle.yml file add the following:

	deployment:
  	  production:  
    	branch: master (or whatever branch you’re working against)
    	commands:
           - bundle exec ninefold app redeploy --robot --sure

or you can simply use curl (Note: The deployment URL can be found in the overview tab)

	deployment:
  	  production:  
    	branch: master (or whatever branch you’re working against)
    	commands:
           - curl -X POST -d "" [Deployment URL]
	
__Jenkins CI__

In your Jenkins shell script that is running your tests, add the redeploy_command or curl [Deployment URL] after your test commands (bundle exec rspec spec, etc).

__Magnum CI__

With Magnum, you can input all the information in straight into the UI. You don’t even need a .yml file!  In your build steps, add the redeploy_command or curl [Deployment URL] in the “After test suite execution” box. Definitely make sure you have “bundle exec” in the command.
