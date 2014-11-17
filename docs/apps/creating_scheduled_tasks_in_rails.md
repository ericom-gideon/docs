page_title: Creating Scheduled Tasks in Rails
page_author: Risa
page_description: Knowledge base article to instruct users on how to create scheduled tasks in Rails on Ninefold
page_keywords: whenever gem cron crontab scheduled tasks scheduler

## Creating scheduled tasks

#### Scheduling
Maybe you’ve got some rake tasks that need to be run every morning. Or maybe you’ve got source some data from an external web service and load it into a your database. Whatever task it is, it’s got to be on a schedule. It’s pretty easy to do with Ninefold.

So the popular way to do this is to schedule a ‘cron’ job to run your commands using the ‘Whenever’ gem. Here’s how.

#### Whenever gem
Add the whenever gem to your Gemfile:

    gem 'whenever', :require => false

Then install the gem in your local environment:

    $ bundle install

#### Create a config file
Create your initial config file in your app:

    $ cd /rails_apps/my_awesome_app
    $ wheneverize .

This will create `config/schedule.rb` which gives some examples to use. Type your cron tasks in `config/schedule.rb`. For examples of some cron schedules, go here: [Whenever gem](https://www.github.com/javan/whenever)

#### Post_migration trigger

In your Ninefold app, go to the __Configuration__ tab > __Deployment Triggers__, in the _After Migrations_ section type:

    $ bundle exec whenever --update-crontab my_awesome_app

Where `my_awesome_app` is what you'd like to name your cron task. You can use this name or use your own, but isn't your app already awesome? Press _Update triggers_ to save.

#### Commit

    $ git add .
    $ git commit -m "Adding cron jobs using whenever"
    $ git push origin my_ninefold_deploy_branch

If autodeploy is turned on, Ninefold will redeploy for you automatically after you've pushed your changes to the repo. If not, a manual redeploy is needed. In portal, press the red __Redeploy Now__.

Cron tasks will be run from the root directory of your app. If you've got multiple web and worker servers, cron tasks currently will run on ALL your web and worker servers by default. If you would like to have the cron task run ONLY on certain servers, please submit a ticket, and we will provide you details on how to do this.

#### Environment vars

You can use defined environment variables in whenever gem constructed cron tasks. Simply add an env line for each of your environment vars in config/schedule.rb:

    ### schedule.rb
    env :SAMPLE_VAR, ENV['SAMPLE_VAR']
    env :ANOTHER_SAMPLE_VAR, ENV['ANOTHER_SAMPLE_VAR']
    env :MANUALLY_DEFINED_VAR, "This is a manually defined environment variable."
    every 15.minutes do
      command "echo \"I am running from cron! Environment variable value: ${SAMPLE_VAR}\""
    end

#### Logging

The whenever gem comes with the ability to set the output to a log file. To do this on Ninefold, add the line below to the `config/schedule.rb` file. This will allow for your output to be directed to the _After Migrations_ trigger log, which is viewable in the CLI as well as in the __Logs__ viewer (Sources > Triggers).

    set :output, '/var/www/apps/YOUR_APP_ID/current/log/custom_deploy_after_migrate.log'

`YOUR_APP_ID` is the App ID found in the URL: `portal.ninefold.com/apps/#####` or via the CLI: `$ ninefold app list`.

For more information about output redirection with the whenever gem, [click here](https://github.com/javan/whenever/wiki/Output-redirection-aka-logging-your-cron-jobs).
