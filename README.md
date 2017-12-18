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
