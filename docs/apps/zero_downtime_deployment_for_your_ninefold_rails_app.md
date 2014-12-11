page_title: Zero Downtime Deployment For Your Rails App
page_author: Brittany Martin
page_description: Knowledge base article to instruct users on how they can implement zero downtime deployment (AKA: Rolling Deployment) for their Ruby on Rails apps
page_keywords: zero downtime deployment redeployment configuration

## Zero downtime deployment

#### What is ZDD?

In traditional deployment environments, when switching an app server in the cloud from the current version to a new version, there is a window of time when the node is unusable in terms of serving traffic. During that window, the app server is taken out of traffic, and after the switch it is brought back into traffic.

With Zero Downtime Deployment (aka Rolling Deployments) on Ninefold, app servers are removed from the load balancer and upgraded one at a time when upgrading your code. This minimizes downtime for your users as you deploy changes to your app. 

#### How to enable ZDD for your Rails app

Check that your app is deployed on at least 2 web servers.

__To check:__

* Click on your App name
* Navigate to the __Infrastructure__ tab
* Click the __Show Details__ button
* Verify that you have at least 2 web servers

__To enable (if you have two deployed web servers):__

* Click on your App name
* Navigate to the __Configuration__ tab
* Click __Enable__ next to the __Zero Downtime Deployment__ option.

You'll be all set for the very next time you deploy your Rails app.
