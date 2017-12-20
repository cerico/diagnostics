# Diagnostics

![screenshot](https://s3.eu-west-2.amazonaws.com/io1937/screenshots/diagnostics.jpeg)


## TLDR / What is it?

Application to tell you which applications are running on what ports on your server

## Why?

I'm currently scripting deployment to a digital ocean server using rsync, but i have to change the server.js to run on a unique port before deploying. my deploy scripts check to see if the port is in use or not, but it would be nice to see which apps are on which port at a glance.

I'm using pm2 to run the node apps, and nginx to proxy them. This application basically queries `pm2 list` and `lsof` to bring back the ports. Annoyingly pm2 dosnt actually show the ports(!), so i had to do a bit of a fiddle with the two

## What does it do so far?

Shows the cpu, memory usage, uptime and port number of each application currently under pm2 control

## What will it do eventually?

Websockets? d3?

## Yes, but how do I run it

Its pretty bespoke at the minute, it only works if you have your applications under pm2 control

```
make dev
```

This runs the dev build but the page will be blank as it needs the server to be running to have any data to process.

```
make start
```

This runs the prod build, it will run on your mac or local machine, but unless you're running pm2 locally there will still be nothing to show

```
make build
```

Builds the bundle ready for deployment, including all the client side packages

```
make deploy
```

Deploys to the target machine, in this case a digital ocean droplet.

## Nice, can I read more about it somewhere?

You can! There's a blog piece on the setup at https://io37.ga/posts/2017-12-19---diagnostics/
