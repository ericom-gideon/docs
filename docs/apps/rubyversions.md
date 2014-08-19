#### Ruby versions we currently support:

* 2.1.2
* 2.1.1
* 2.1.0
* 2.0.0 (multiple patch levels)
* 1.9.3 (multiple patch levels)

#### Introspection and Ruby versions:

When you deploy an app on Ninefold, we check your Gemfile for your application's Ruby version, so that you don't have to select it from the drop-down.   If you do not have a ruby version defined in your Gemfile we will default to the latest released version we support. 

	# Sample Gemfile declaration
	
	source 'https://rubygems.org'
	ruby '2.1.1'

#### What happens if my app changes Ruby version?

If you change the Ruby version of your app, you will need to redeploy. This can be done by going to your App > Configuration (tab) > Edit (Ruby version) > choose the correct Ruby version > Update > Redeploy now.

If your app requires an unsupported version of Ruby, please [contact support](mailto:support@ninefold.com) to let us know.
