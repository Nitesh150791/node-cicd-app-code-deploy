#!/bin/bash
cd /home/ec2-user/app

# Install Node.js
curl -sL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs

npm install || true
