// bring in the websocket library
const WebSocket = require('ws')

// create a new websocket server
const wss = new WebSocket.Server({ port: 8081})

// Adds the listener function to the end of the listeners array for the event named eventName.
// No checks are made to see if the listener has already been added.
// Multiple calls passing the same combination of eventNameand listener will result in the listener being added, 
// and called, multiple times.
wss.on('connection',function connection(ws) {
    console.log('Client Connected')
    const interval = setInterval(() => {
        ws.send('Hello World')
    }, 1000);
    ws.on('close', () => {
        console.log('Client Disconnected')
    });
    //handle errors
    ws.onerror = function () {
        console.log('Some error occurred');
    }
})