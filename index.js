const server = require('./app');
const wsApp = require('./app-ws')

wsApp(server.listen(4000, () => console.log('App is runing at port: ' + 4000)));