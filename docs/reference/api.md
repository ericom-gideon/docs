page_title: Using the Ninefold API
page_description: Using the Ninefold API
page_keywords: api

## Using the Ninefold API

The Ninefold cloud uses Citrix CloudPlatform, which is based on the open source Apache Cloudstack code base.

The full [API Guide](http://download.cloud.com/releases/3.0.6/api_3.0.6/TOC_User.html) details all the methods that are allowed for use with virtual servers on our platform.

The Ninefold API is accessible via: https://api.ninefold.com/compute/v2.0

When using the following commands, a "project" (use command=listProjects to identify) must be specified:

	command=listVirtualMachines
	command=deployVirtualMachine
	command=registerIso
	command=updateIso
	command=associateIpAddress
	command=registerTemplate
	command=registerIsoTemplate
	command=createVolume
	command=createNetwork

NOTE: Ninefold uses the following naming convention for projects. Doing a list project API call will display your project names.

There is a default project (used as the container for your servers). It's name will be: NF<ID-number>Default

Every application deployed is placed into its own isolated project. The project name for the application will be: <unique-app-ID>App

The following API calls are not permitted:

	command=deleteProject
	command=suspendProject
