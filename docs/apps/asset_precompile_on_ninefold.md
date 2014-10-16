page_title: Asset Precompilation on Ninefold
page_description: Knowledge base article to instruct users on how Ninefold handles asset precompilation
page_keywords: assets precompile asset management carrierwave paperclip

## Asset precompilation on Ninefold

#### About asset precompile
On Ninefold, we run a few rake commands during initial deployment and every subsequent deployment of a new customer code release or a force redeploy of an existing release. One of these is `rake assets:precompile`.

We run this task automatically for you provided you are using rails version 3.2 or higher.  The rake task is skipped if you have checked in files to the public/assets folder other than *.ico files.  

Ninefold uses [Apache](http://apache.com) to serve the precompiled .gz versions of static assets if it’s available and if the browser supports it.

NOTE: If you opt to run `rake assets:precompile` locally then commit them to your repo, be sure to add the following to the config/environment/production.rb file: `config/serve_static_assets=true`

This forces the assets that are in the public/assets directory to be served properly in production.  

***
_NOTE: Our recommendation is to allow us to run `rake assets:precompile` for you. This will allow for you to troubleshoot any precompilation errors via our Log viewer or CLI._
***

In the context of a production environment, it’s generally a good idea to have `config.assets.compile=false` (the default). If you set it to true, it mimics the dev environment, where assets not found in the public directory are then looked for and served using Rails middleware.  This is a heavy tax and added overhead to the performance in production and is not advised.

If you're interested in learning more about the asset pipeline because it's pretty confusing even to seasoned devs, check out [this awesome blog post](https://ninefold.com/blog/2014/07/01/rails-and-the-warped-asset-pipeline/) about it!

#### File uploads and the public directory
File uploading gems such as [Carrierwave](https://github.com/carrierwaveuploader/carrierwave) or [Paperclip](https://github.com/thoughtbot/paperclip) generally store files in the public directory. At Ninefold, every web server has its own file system. While that is enticing to use as storage, writing to the web server file system is not scalable and is not persistent across new code deployments. With multiple web servers, uploaded files will be stored on the server that handles the request. Subsequent requests may be handled by a different server and that file will not be available to it. A common object store such as S3 is the preferred approach.

#### A word about CDNs
Content distribution networks (CDNs) are for performance. Ninefold ensures that cache headers are properly set and that gzipped assets are served correctly from Ninefold. This means that assets will be cached at the browser for subsequent requests until a new revision updates them. When assets are served externally using a CDN, that responsibility passes to the customer / third party.
