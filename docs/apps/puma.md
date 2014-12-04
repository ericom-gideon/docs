page_title: Setup: Puma
page_author: Eden
page_description: Knowledge base article to instruct users on how enable Puma as their app server
page_keywords: app server webserver puma nginx procfile deployment memory

## Setup: Puma – For your speed and concurrency needs.

#### Overview
If you’ve got a need for speed, then puma is your app server! It is empowered with performance thanks to the use of a Ragel extension in order to deliver hasty, spot-on HTTP 1.1 protocol parsing.

#### How to Setup: Before Deployment

__Puma Gem__

Add the Puma gem to your Gemfile as below:

    group :production do
      gem puma
    end

(be sure to bundle)

In your Procfile:

web: bundle exec puma start -p $PORT

That is all you need to do, now simply commit and push!

Now, when deploying; all the default options are ticked for you in order to make use of your nominated web server via your Procfile. Specifically on step 3 – ‘Run web-server with a Procfile’ should be set to ‘Yes’.

#### How to Setup: Post Deployment

__Already Using Another Nginx App Server__

You can change your app server at any time by altering your Procfile (and adjusting your configuration on your app), followed by committing and then redeploying on Ninefold.

__Enable A New App Server__

If you would like to switch to Nginx as a web server:
- Go to the __Configuration__ tab,
- Under App Server, click "Use Procfile". 
- Redeploy.

#### Additional Information

Additional information about Puma can be found 
[here]( https://github.com/puma/puma) and 
[here]( http://puma.io/).
