page_title:       Creating Scheduled Tasks in Rails
page_author:      Risa B
page_description: Knowledge base article to instruct users on how to create scheduled tasks in Rails on Ninefold
page_keywords:    whenever gem cron crontab scheduled tasks scheduler

## Creating scheduled tasks in Rails

#### Scheduling
Maybe you’ve got some rake tasks that need to be run every morning. Or maybe you’ve got source some data from an external web service and load it into a your database. Whatever task it is, it’s got to be on a schedule. It’s pretty easy to do with Ninefold.

So the popular way to do this is to schedule a ‘cron’ job to run your commands using the ‘Whenever’ gem. Here’s how.

#### Install the whenever gem
Add the whenever gem to your Gemfile:

    gem 'whenever', :require => false

Then install the gem in your local environment:

    $ bundle install

#### Create a config file
Create your initial config file in your app:

    $ cd /rails_apps/my_awesome_app
    $ wheneverize .

This will create `config/schedule.rb` which gives some examples to use. Type your cron tasks in `config/schedule.rb`. For examples of some cron schedules, go here: [Whenever gem](https://www.github.com/javan/whenever)

#### Set up custom post_migration trigger on Ninefold

In your Ninefold app, go to the __Configuration__ tab > __Deployment Triggers__, in the _After Migrations_ section type:

    $ bundle exec whenever --update-crontab my_awesome_app

Where `my_awesome_app` is what you'd like to name your cron task. Press _Update triggers_ to save.

#### Commit your changes to run the triggers

    $ git add .
    $ git commit -m "Adding cron jobs using whenever"
    $ git push origin my_ninefold_deploy_branch

_Note: You've got to update your triggers first before you commit so that Ninefold can run them properly._

Cron tasks will be run from the root directory of your app. If you've got multiple web and worker servers, cron tasks currently will run on ALL your web and worker servers by default. If you would like to have the cron task run ONLY on certain servers, please submit a ticket, and we will provide you details on how to do this.

#### Adding an environment variable to cron

You can use defined environment variables in whenever gem constructed cron tasks. Simply add an env line for each of your environment vars in config/schedule.rb:

    ### schedule.rb
    env :SAMPLE_VAR, ENV['SAMPLE_VAR']
    env :ANOTHER_SAMPLE_VAR, ENV[‘ANOTHER_SAMPLE_VAR’]
    env :MANUALLY_DEFINED_VAR, “This is a manually defined environment variable."
    every 15.minutes do
      command "echo \"I am running from cron! Environment variable value: ${SAMPLE_VAR}\""
    end

#### Logging your cron jobs

The whenever gem comes with the ability to set the output to a log file. To do this on Ninefold, add this to your config/schedule.rb file"."

    set :output, '/var/www/apps/YOUR_APP_NAME/current/log/custom_deploy_after_migrate.log'

Where `YOUR_APP_NAME` is the git name of your app. This will allow for your output to be directed to the _After Migrations_ trigger log, which is viewable in the CLI as well as in the __Logs__ viewer (under Triggers).

For more information about output redirection with the whenever gem, [click here](https://github.com/javan/whenever/wiki/Output-redirection-aka-logging-your-cron-jobs).
