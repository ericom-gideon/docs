page_title: Setup: Thin
page_author: Risa
page_description: Knowledge base article to instruct users on how enable Thin as their app server
page_keywords: app server webserver thin nginx procfile deployment memory

## Setup: Thin

#### Overview

Now that Ninefold supports Nginx, you can deploy Rails apps with the [Thin](https://github.com/macournoyer/thin/) app server. Thin is yet another  server that combines "3 of the best Ruby libraries in web history": Mongrel parser, Event Machine, and Rack.  It is simple, secure, stable, fast, and extensible.

It's simple to implement and use. And on Ninefold, it's the default choice for the Nginx web server (reverse proxy server).

#### How to Setup: Before Deployment

__Thin Gem__

Add the Thin gem to your Gemfile like so:

    group :production do
      gem 'thin'  
    end

Don't forget to run bundle install!

__Procfile__

In your Procfile, add this line to the beginning:

    web: bundle exec thin start -p $PORT

And that's it! Commit your code to your repository!

When you step through the Deploy wizard, __3 Details__ will have _Run web-server with a Procfile_. Make sure YES is highlighted. And then deploy. Super simple.

***
Note: If you choose YES but do not have the Thin gem nor a Procfile, Ninefold will: 1) Insert the Thin gem into your Gemfile and run Bundler, and 2) create a Procfile for you.
***

#### How to Setup: Post Deployment

__Already Using Another Nginx App Server__

You can change your app server at any time by changing your Procfile (and code configuration with your app), committing and redeploying on Ninefold.

__Enable A New App Server__

If you would like to switch to Nginx as a web server, go to the __Configuration__ tab and under App Server, click "Use Procfile". Finish off with a redeploy.

#### Additional Information

Additional information about Thin can be found [here](https://github.com/macournoyer/thin/) and [here](http://code.macournoyer.com/thin/).
