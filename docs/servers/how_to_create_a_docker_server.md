page_title:       How to Create a Docker Server
page_author:      Angelo Livanos (Coverted by Brittany Martin)
page_description: Knowledge base article to instruct users on they can deploy a Ubuntu server with Docker installed
page_keywords:    server volume Docker container ubuntu 

## How to create a Docker server

Now when you go to deploy a bare server, you have the option to deploy one with [Docker](https://www.docker.com/) preloaded. 

Just select Ubuntu as the OS and then choose Docker in the server deployment wizard. We will automatically setup Ubuntu 14.04 LTS with Docker as well as several images preloaded to help you get started. All of the included images are from the official/trusted repositories.

The images preloaded are:

* Ubuntu
* MySQL
* MongoDB
* Node.js
* Elasticsearch

_NOTE: You can remove any of these from your server using docker rmi repository:tag)_

If you are new to Docker, we suggest running through the examples in the [Docker tutorial](https://www.docker.com/tryit/). After you have gone through the tutorials, the Docker Hub has 14,000+ images for you to use today and it just keeps growing.

Start shipping and running some containers! 
