page_title:Install Spree
page_description: Knowledge base article to give users some tips for deploying Spree on Ninefold
page_keywords: Spree ecommerce rails Shopify opensource 

## Spree on Ninefold

#### Why is Spree fantastic?

[Spree](https://spreecommerce.com/storefront) is one of the largest open source software projects in the world -- not just ecommerce software -- but of anything! Spree is a full featured e-commerce platform written for the Ruby on Rails framework. It is designed to make programming commerce applications easier by making several assumptions about what most developers need to get started. 

That being said, Rails developers are the target audience for Spree - not business owners. Spree seeks to be the platform that developers use as the foundation for their project rather than having to start from scratch.

#### Getting Started

If you are a developer that is new to Spree, Spree has an excellent tutorial to walk through [here](https://guides.spreecommerce.com/developer/getting_started_tutorial.html). 

#### Deploying to Ninefold

Spree has an easy to follow guide from Ninefold that makes it easy to deploy. Follow the tutorial [here](https://guides.spreecommerce.com/developer/ninefold.html).

#### Infrastructure 

Spree is a complex app and can quickly go through a lot of resources. If the Spree store will serve real traffic (~ 100 concurrent users), Ninefold recommends a Production setup like the following:

* 2 X 1.5GB Web servers (aka 2 web servers)
* 1 X 1.5GB Database server
* 1 X 1.5GB Worker server

Of course, your inventory and code greatly affect what is the best infrastructure for the app. Ninefold recommends conducting load testing with a combination of [Flood.io](https://flood.io/) and [New Relic](www.newrelic.com) as we did [here](http://ninefold.com/spree/).

#### Wrap-up

1. Learn Spree
2. Deploy Spree to Ninefold
3. Something (maybe finding something to sell!)
4. Profit