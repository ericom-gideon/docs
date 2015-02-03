page_title: Setup: Sidekiq
page_author: Eden Halil
page_description: Knowledge base article to instruct users on how to install and configure sidekiq as their background worker at a basic level.
page_keywords: background worker sidekiq procfile Procfile

## Implement: Sidekiq

#### Overview

So you’re in need of some background processing for hefty tasks? Then Sidekiq can help! Sidekiq utilizes threads in order to process jobs so it is memory efficient; this is as opposed to Resque, which forks a new process for every job. 

** A note before starting; you need to have ticked yes on the option on Step 2 (Configure) for Background worker to be installed, which is in fact enabled by default. Ticking this will also install redis for use with your worker. **

Now onwards!

#### Gemfile

To start, add the gem to your Gemfile:

    gem 'sidekiq'

And then run `bundle install`.

** Note: Versions prior to 3.2.5 have a known issue where sidekiq jobs are not successfully killed after completion, which causes them to accumulate and eventually crash an app. **

### .yml file

You should have .yml file which looks something like:

##### config/sidekiq.yml
    :concurrency: <%= ENV["SIDEKIQ_CONCURRENCY"] || 4 %>
    :queues:
      - default

### Procfile

Next, add this line to your Procfile:

      sidekiq: bundle exec sidekiq

** Note: This is the command you would run on your local environment in order to start sidekiq up (minus the ‘sidekiq:’ part at the beginning). **

Now call it by moving the task code into a worker file. Here is a sample code segment:

#### app/workers/send_text_worker.rb
        class SendTextWorker
          include Sidekiq::Worker

          def perform(text_message_id)
            <Some code here>
          end
        end

Then you simply call this file where you initially removed the task code from:

      SendTextWorker.perform_async(text_message.id)

That’s it! You have successfully implemented Sidekiq for background job processing.

#### Additional information

Additional information about Sidekiq can be found
[here]( https://github.com/mperham/sidekiq) and
[here]( http://sidekiq.org/).