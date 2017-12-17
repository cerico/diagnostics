#Diagnostics

[![Greenkeeper badge](https://badges.greenkeeper.io/cerico/diagnostics.svg)](https://greenkeeper.io/)

## TLDR / What is it?

Application to tell you which applications are running on what ports on your server

## Why?

I'm currently scripting deployment to a digital ocean server using rsync, but i have to change the server.js to run on a unique port before deploying. my deploy scripts check to see if the port is in use or not, but it would be nice to see which apps are on which port at a glance.

I'm using pm2 to run the node apps, and nginx to proxy them. This application basically queries `pm2 list` and `lsof` to bring back the ports. Annoyingly pm2 dosnt actually show the ports(!), so i had to do a bit of a fiddle with the two

## What does it do so far?

There are 3 main views, an index view, a pid view and a port view. the pm2 list command shows you the app name and the pid, the port view shows you the pid and the port. Couldn't see how to get the app name and the port at same time.

## What will it do eventually?

So there's no front end at app yet, just a static index.html with links to two server rendered views (pids, ports). Next up is to build a react piece, which will join the two server calls together into a nice object to display on screen, then some d3 to do a chart of some kind with it 
