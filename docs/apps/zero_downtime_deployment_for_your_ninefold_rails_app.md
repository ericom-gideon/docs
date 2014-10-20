page_title:       Zero Downtime Deployment For Your Rails App
page_author:      Brittany Martin
page_description: Knowledge base article to instruct users on how they can implement zero downtime deployment 
page_keywords:    zero downtime deployment redeployment lab 

## Zero downtime deployment

#### What is ZDD?

In traditional deployment environments, when switching an app server in the cloud from the current version to a new version, there is a window of time when the node is unusable in terms of serving traffic. During that window, the app server is taken out of traffic, and after the switch it is brought back into traffic.

With Zero Downtime Deployment (aka Rolling Deployments) on Ninefold, app servers are removed from the load balancer and upgraded one at a time when upgrading your code. This minimizes downtime for your users as you deploy changes to your app. 

#### How to enable 

Check that your app is deployed on at least 2 web servers.

__To check:__

* Click on your App name
* Navigate to the __Infrastructure__ tab
* Click the __Show Details__ button
* Verify that you have at least 2 web servers

__To enable:__

If you have two deployed web servers, navigate to __Account__, __Edit Details__.

Click on the Labs tab and check off the __Zero Downtime Deployment__ option and __Update__. You’ll be all set!
