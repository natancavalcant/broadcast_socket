const websocket = require('ws');

//CHECK_IN, ATENDIMENTO, ATENDIMENTO_FIDELIZADO, PROXIMO, CHECK_OUT

module.exports = (server) => {
  const wss = new websocket.Server({
    server
  });

  wss.on('connection', onConnection);

  function onConnection(ws, req) {
    ws.on('message', data => onMessage(ws, data));
    ws.on('check-in', data => onCheckIn(ws, data));
    ws.on('error', error => onError(ws, error));
  }

  function onMessage(ws, data) {
    
    wss.clients.forEach((client)=>{
      if(client.readyState === websocket.OPEN){
        console.log(`onMessage: ${data}a`);
        client.send(data.toString())
      }
    })
    ws.send(`recebido!`);
  }

  function onError(ws, err) {
    console.error(`onError: ${err.message}`);
  }

  console.log(`App Web Socket Server is running!`);
  return wss;
  
}