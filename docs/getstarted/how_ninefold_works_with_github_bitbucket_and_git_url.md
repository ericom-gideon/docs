page_title:       How Ninefold works with Github, Bitbucket and Git URL
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users on how Ninefold interacts with Github, Bitbucket and Git URL
page_keywords:    repo Github Bitbucket git deployment redeployment repository 

# How Ninefold works with Github, Bitbucket and Git URL

#### Overview

Ninefold will pull your code in from Github.com, Bitbucket.com, or from your private Git URL. You specify your repository in Step 1 of the Rails Deployment workflow. 

Another feature of Ninefold for Githbub and Bitbucket only is the ability to enable _auto redeployments_. 

This means that everytime you push code changes to the branch you deployed on to Ninefold, Ninefold will automatically redeploy your app for you. Look ma, no manual redeploy! You can turn this feature on during initial deployment or toggle on/off from the overview page of your deployed app. You need to be an admin of the repo in order to enable _auto redeployment_.

If repos + Ninefold tickles your fancy, read on.

#### Github

[GitHub](www.github.com) is a web-based hosting service for software development projects that use the Git revision control system. GitHub offers both paid plans for private repositories, and free accounts for open source projects.

If you're not familiar with GitHub, please [sign up](https://help.github.com/articles/signing-up-for-a-new-github-account) for a new account and take a look at their docs. 

During your first app deployment you will be asked to enter your GitHub login credentials. This interaction happens between you and GitHub securely and will allow you to connect Ninefold to your GitHub account. You will presented with a list of read/write access requests that we are making. 

Ninefold requests read access to all of your repositories in order to populate the list of repositories from which you would like to deploy code.  We require write access in order to add WebHooks. If you don't have write access, then you'll need to use the Git URL option below. 

With _auto redeployment_, Ninefold will trigger a Redeploy for you on every commit to the branch you've deployed against.

_Note: We will never make changes to your codebase or read your followers or your gists - GitHub adds these by default to the requests we're making._

__Special Case: Github SSH Keys__

You're working on a client's app and have access to their repository. You attempt deployment through Ninefold and BAM! Something breaks. You can't deploy because Ninefold can't add an SSH key to that repo. What happened?

As a member of an organization, you may have push and pull access to a repo. However if you don't have administrative rights to it, Ninefold cannot deploy your app because Ninefold cannot add an SSH key to the repo.

A few options:

* The owner of the organization must grant you administrative rights for that particular repo. Once Ninefold adds the public SSH key to the repo, administrative rights may safely be revoked again without affecting deoloyment in the future. We only need to add the key once.
* Create a general account on Github for use with our portal. This will allow for instances when a person with authorization access leaves the company.
If you don't require the post-commit hooks, you can use the git URL approach and add the SSH key to your repo.

------

For assistance with Github, please visit [https://help.github.com/](https://help.github.com/).

##### Bitbucket

[Bitbucket](https://bitbucket.org/) is a web-based hosting service for software development projects that use the Git revision control system. Bitbucket offers both paid plans for private repositories, and free accounts for open source projects.

If you're not familiar with Bitbucket, please [sign up](https://bitbucket.org/) for a new account and take a look at their docs.

During your first app deployment, upon selecting Bitbucket as your code repository you will be asked to enter your Bitbucket login credentials.  This interaction happens between you and Bitbucket securely and will allow you to connect Ninefold to your Bitbucket account.

Ninefold requests read access to all of your repositories in order to populate the list of repositories from which you would like to deploy code.  We require write access in order to add WebHooks. If you don't have write access, then you'll need to use the Git URL option below. 

With _auto redeployment_, Ninefold will trigger a Redeploy for you on every commit to the branch you've deployed against.

_Note: We will never make changes to your codebase or read your followers or your gists - Bitbucket adds these by default to the requests we're making._

------

For assistance with Bitbucket, please visit [https://bitbucket.org/support](https://bitbucket.org/support)

##### Git URL

If you:

* Host your repo locally 
* Don't have write permissions to your Github or Bitbucket repo
* Use a private repo hosting service like [GitLab](https://about.gitlab.com/) 

then the Git URL option is the one for you. Do note that the _auto redeployment_ feature mentioned in the Overview is not possible with Git URL. 

You will need to generate a Git URL from your repo. The format of the Git URL will be similar to this: 

	git@URL/gitrepo.git

Simply plug the URL into the app deployment wizard in Step 1 and you'll be on your way to deployment bliss. 