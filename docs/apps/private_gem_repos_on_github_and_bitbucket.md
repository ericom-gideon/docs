page_title:       Private Gem Repos on Github and Bitbucket
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users on how to implement private gem repos when they host their repo on Github or Bitbucket
page_keywords:    github bitbucket gem repo private repository 

## Private Gem repos on GitHub & Bitbucket

#### Overview

If private gems is your thing, it’s all good.  You won’t have any issues deploying with us.

#### GitHub

You have two choices. You can do this via the command line, or you can do this through GitHub.

__#1 Command Line__

Type in your Terminal changing the appropriate fields for your GitHub name and the gem repo name:

	$ curl -u '<username>' -d '{"scopes":["repo"],"note":"<gem repo name>"}' https://api.github.com/authorizations

This will get you the GitHub token. Copy the token line that is generated. 

Example:

	"token": "4726#######################"

__#2 GitHub__

Log in. Go to Settings > Applications > Personal Access Tokens > Generate new token

Create a new token. Choose the scopes for what you want (such as just repo vs public repo).

Copy the token generated.

In your Gemfile, have this for your gem

	gem ‘name_of_the_gem’, “https://#{ENV['GITHUB_TOKEN']}:x-oath-basic@github.com/your_github_username/name_of_the_gem.git


Run

	$ export GITHUB_TOKEN= (enter in the token you generated above)

Then 

	$ bundle

Commit and push.

In the __Configuration__ tab of you app on Ninefold, under __Environment Variables__, add in the GITHUB_TOKEN.

Click __Update Variables__, then click __Redeploy__.

#### Bitbucket

Bitbucket is more difficult than Github since Bitbucket doesn't offer OAuth tokens. Sadly, you would need to add your username and password to your gem URL to have it work easily (and we certainly don't want you committing passwords!). 

The good news is that Bitbucket Team accounts have API keys that can be used to clone repos over https without knowing the team account's password but using this for cloning gem repos is not supported. 

You can track the issue requesting Bitbucket to add Oauth tokens [here](https://bitbucket.org/site/master/issue/7735/allow-http-access-to-repositories-via?utm_source=SAC&utm_medium=dashboard).
