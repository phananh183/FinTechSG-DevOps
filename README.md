# DevOps NUSFinTechSG

This is a simple website that updates price of Bitcoin, using websocket from Binance.

## Logs of trying to navigate the project

1. Create a simple html page, based on a simple idea of updating bitcoin price with data from binance through a js file.

2. Then i was meddling with google cloud run basic guides and decide to try out the steps as written here: https://cloud.google.com/run/docs/quickstarts/build-and-deploy/nodejs
I tried to run this command in my project folder

		gcloud run deploy
	yet it failed for some reasons.
3. Then I found out that my application might not meet some requirements to so-called "develop a service" using Cloud Run, as outlined here: https://cloud.google.com/run/docs/developing. As of now it is only an html file with some javascript that runs on client side, and the requirement is that the application must be using a web server, and listening for requests.
