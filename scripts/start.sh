#!/bin/bash
cd /home/ec2-user/app
pkill node || true
nohup node app.js > app.log 2>&1 &
