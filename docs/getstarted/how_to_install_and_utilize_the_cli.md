page_title:       CLI
page_autor:       Brittany Martin
page_description: Knowledge base article to instruct users on the Ninefold CLI
page_keywords:    CLI Ninefold Gem Brutus

## How to install and utilize the CLI

#### Why install the Ninefold CLI?

The Ninefold CLI is great for managing your Rails app on Ninefold from the command line. The CLI allows you to:

* run rails console
* view and tail logs
* manage database backups
* trigger a redeployment
* run rake tasks
* much more

Plus, you can interact with our awesome mascot, Brutus, the shaved yak!

#### How to install

Open your terminal. Install this CLI with the usual gem install command to install in into your system:

    $ gem install ninefold

Remember to close and reopen your terminal after you have finished installing. You do not need to include the gem in your Gemfile but you are welcome to!

#### How to update

Ninefold regularly updates the CLI, so we encourage you update the gem prior to use:

    $ gem update ninefold

You can view your current version of the Ninefold CLI gem by typing:

    $ gem list ninefold

#### How to get started with the CLI

Start with

    $ ninefold signin

You will see a list of apps available for you to select from.

To see a list of commands available for your app:

    $ ninefold help

    Commands:
      ninefold app SUBCOMMAND       # manage your apps
      ninefold brutus SUBCOMMAND    # make Brutus do things
      ninefold console              # shortcut for app:console
      ninefold db SUBCOMMAND        # manage your databases
      ninefold dbconsole            # shortcut for app:dbconsole
      ninefold help [COMMAND]       # Describe available commands or one specific command
      ninefold logs                 # shortcut for app:logs
      ninefold rake                 # shortcut for app:rake
      ninefold signin               # shortcut for user:signin
      ninefold signout              # shortcut for user:signout
      ninefold user SUBCOMMAND      # manage user credentials
      ninefold webhooks SUBCOMMAND  # manage your webhooks
      ninefold whoami               # shortcut for user:whoami

    Options:
      -s, [--sure], [--no-sure]     # don't ask for confirmation
      -k, [--public-key=PUBLIC_KEY] # your public key location
          # Default: ~/.ssh/id_rsa.pub
      -q, [--robot], [--no-robot]   # plain b&w mode w/o animations

#### Logging


Help menu:

	$ ninefold app help logs

To view logs:
	
	$ ninefold app logs

To view a particular log (using the log title from log viewer > Sources. Note it’s  lowercase “L”). The logs in the CLI match the source name from Portal logging. 

	$ ninefold app logs -l rails
	$ ninefold app logs -l cheflog

To view a particular Host (server, e.g. from log viewer > Hosts. Note that it’s “H” not “h”):

	$ ninefold app logs -H 269e

To search logs for a specific word, e.g. ‘FATAL’:

	$ ninefold app logs -f FATAL

To search logs for a specific phrase, e.g. ‘Rendered static_pages’ (you will need quotes):

	$ ninefold app logs -f ‘Rendered static_pages’

To search logs for specific dates, e.g. from 2014/07/20 to 2014/07/25:

	$ ninefold app logs --from=’2014/07/20’ --to=’2014/07/25’

#### Documentation

You can visit the Ninefold CLI Github repo here: [https://github.com/ninefold/cli](https://github.com/ninefold/cli) If you would like to contribute, more details can be found there.
