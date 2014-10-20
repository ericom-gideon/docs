page_title:       Upgrading from Rails 4.0 to 4.1
page_description: Knowledge base article to instruct users on what to change when upgrading from Rails 4.0 to 4.1
page_keywords:    upgrade rails 4.0 4.1 secret_token secret_key_base

## Upgrading from Rails 4.0 to 4.1

#### Overview
That's fantastic that you've decided to go on the bleeding edge! :) Some important stuff was introduced in Rails 4.1 that 4.0 didn't have. Most notably (and importantly, for the purpose of this KB article) was the `config/secrets.yml` file for storing your secrets.  

#### Secret_tokens and secret_key_bases
All your key_bases are belong to us. By default, the config/secrets.yml file should look like this:

    development:
     secret_key_base: b3dfb578c...some...hash....

    test:
     secret_key_base: 5a5dad9bf...some...hash....

    # Do not keep production secrets in the repository,
    # instead read values from the environment.
    production:
     secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>

But wait! You deployed your app on Ninefold with Rails 4.0. By default, that uses SECRET_TOKEN. What should you do?

The simplest answer is to change the last line of your config/secrets.yml file to have it point to the already-made SECRET_TOKEN environmental variable.

    production:
     secret_key_base: <%= ENV["SECRET_TOKEN"] %>

When upgrading, the file may be listed in your `.gitignore` and will have to be uncommented out.*

If, however, you do not want to make this change, that's OK too. You will then have to create a new secret hash:

    rake secrets

Then insert that new hash with your SECRET_KEY_BASE token in your Environment Variables in Ninefold.

    SECRET_KEY_BASE=1234asdf_your_new_hash

#### Environment Variables
As we provide a section for environmental variables, we do not require your secrets to be stored in config/secrets.yml.  They can all be inserted as Environment Variables.  To access this, go to __Portal__ > __Your App__ > __Configuration__ (tab) and scroll to the bottom to _Environment Variables_.

\* If you started afresh with Rails 4.1, by default the config/secrets.yml file is NOT in your `.gitignore` file.
