#!/bin/bash
cd /home/ubuntu/app
pkill node || true
nohup node app.js > app.log 2>&1 &
