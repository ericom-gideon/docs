page_title: Docker containers on virtual servers
page_description: Docker containers on virtual servers
page_keywords: docker, containers

## Docker containers on virtual servers

Now when you go to deploy a bare server, you have the option to deploy one with Docker preloaded. Just select Ubuntu as the OS and then choose Docker in the server deployment wizard. We will automatically setup Ubuntu 14.04 LTS with Docker as well as several images preloaded to help you get started. All of the included images are from the official/trusted repositories.

The images preloaded are: (NOTE: You can remove any of these from your server using docker rmi repository:tag)

* [Ubuntu](https://registry.hub.docker.com/_/ubuntu/)
* [MySQL](https://registry.hub.docker.com/_/mysql/)
* [MongoDB](https://registry.hub.docker.com/_/mongo/)
* [Node.js](https://registry.hub.docker.com/_/node/)
* [Elasticsearch](https://registry.hub.docker.com/u/dockerfile/elasticsearch/)

If you are new to Docker, we suggest running through the examples in the [Docker tutorial](https://www.docker.com/tryit/). 
