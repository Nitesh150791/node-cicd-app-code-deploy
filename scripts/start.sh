#!/bin/bash

cd /home/ec2-user/app

echo "Installing dependencies"
npm install

echo "Starting app"
nohup npm start > app.log 2>&1 &
