#!/bin/bash
echo "mdt1234@" | sudo -S apt-get update
echo "mdt1234@" | sudo -S apt-get -y remove libnode-dev
cd /var/family/barber-online
echo "mdt1234@" | sudo -S apt-get install -y nodejs
npm install
npm run build
pm2 restart all
