#!/bin/bash
cd /home/ec2-user/app

# Kill old process
pkill node || true

# Start app
nohup node app.js > out.log 2>&1 &
