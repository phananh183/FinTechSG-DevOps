var symbol = 'btc';
var binanceSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}busd@kline_1m`);

var price = document.getElementById('price');

binanceSocket.onmessage = (e) => {
    console.log(e.data);
    var messageObj = JSON.parse(e.data);
    price.innerHTML = Math.round(messageObj.k.o) + ' USD'
}

