# ChatApp

## Start ngrok service

Note: Must install ngrok first..

`ngrok http 3000`

Copy the "Forwarding" url (e.g. https://51d4f51f.ngrok.io) and replace the value in `client/src/index.js` on Line 17

## Start chat server

`cd server`
`node main.js`

## Start Expo packager

`cd client`
`yarn start`

Either scan the QR code with the Expo app on your device or press `i` to launch the iOS simulator (macOS only)