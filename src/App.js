import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

var socketStatus = document.getElementById('status');
var closeBtn = document.getElementById('close');

var socket = io('wss://le-18262636.bitzonte.com', {
    path: '/stocks'
  });

socket.onclose = function(event) {
    socketStatus.innerHTML = 'Desconectado de WebSocket.';
};

socket.onopen = function(event) {
    socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
};

const columns = [{
    Header: 'Nombre',
    accessor: 'ticker'
}, {
    Header: 'Ultimo Precio',
    accessor: 'value'
}, {
    Header: 'Variacion Porcentual',
    accessor: 'change'
}, {
    Header: 'Alto Historico',
    accessor: 'highest'
}, {
    Header: 'Bajo Historico',
    accessor: 'lowest'
}, {
    Header: 'Volumen Total Transado',
    accessor: 'volume'
}];

const columns2 = ['Nombre', 'Volumen Compra', 'Volumen Venta', 'Volumen Total', 'Cantidad Acciones', 'Participacion de Mercado'];

var acc_his = [];
var acciones = [];
socket.emit('STOCKS', /* */);
socket.on('STOCKS', accion => {
    for (var i = 0; i < accion.length; i++) {
        var diccc = {ticker: accion[i].ticker, value: 0, change: 0, highest: 0, lowest: 1000000, volume: 0, name: accion[i].company_name};
        acciones.push(diccc);
        var dicc3 = {ticker: accion[i].ticker, value: []};
        acc_his.push(dicc3);
    }
});

var mercados2 = [];
socket.emit('EXCHANGES', /* */);
socket.once('EXCHANGES', mercado => {
    for (var key in mercado) {
        var dicc2 = {name: mercado[key].name, buy: 0, sell: 0, total: 0, quantity: mercado[key].listed_companies.length, participation: 50, final: 0, lista: mercado[key].listed_companies};
        mercados2.push(dicc2);
    }
});

function App() {

  const [data, setData] = useState([]);
    const [data2, setData2] = useState(acc_his);
    const [stocks, setStocks] = useState(acciones);
    const [colu, setColu] = useState(columns);
    const [exchange, setExchange] = useState(mercados2);
    const [colu2, setColu2] = useState(columns2);

    // 1. listen for a cpu event and update the state
    useEffect(() => {
        socket.on('UPDATE', newInfo => {
            setData(currentData => [...currentData, newInfo]);
            var data_his = data2;
            for (var i = 0; i < data_his.length; i++) {
                if (data_his[i].ticker == newInfo.ticker) {
                    var tiempo = new Date(newInfo.time).toLocaleString("es-CL");
                    data_his[i].value.push({value: newInfo.value, time: tiempo});
                }
            }
            setData2(data_his);
            var acciones = stocks;
            for (var i = 0; i < acciones.length; i++) {
                if (newInfo.ticker == acciones[i].ticker) {
                    acciones[i].change = ((acciones[i].value / newInfo.value) - 1) * 100;
                    acciones[i].value = newInfo.value;
                    if (newInfo.value > acciones[i].highest) {
                        acciones[i].highest = newInfo.value;
                    }
                    if (newInfo.value < acciones[i].lowest) {
                        acciones[i].lowest = newInfo.value;
                    }
                }
            }
            setStocks(acciones);
            console.log(acciones);
        });
        socket.on('BUY', newInfo => {
            var acciones = stocks;
            var mercados = exchange;
            for (var i = 0; i < acciones.length; i++) {
                if (newInfo.ticker == acciones[i].ticker) {
                    acciones[i].volume += newInfo.volume;
                    for (var j = 0; j < mercados.length; j++) {
                        var boolee = mercados[j].lista.includes(acciones[i].name);
                        if (boolee) {
                            mercados[j].buy += newInfo.volume;
                            mercados[j].total += newInfo.volume;
                        }
                        mercados[j].final += newInfo.volume;
                        mercados[j].participation = (mercados[j].total / mercados[j].final) * 100;
                    }
                }
            }
            setStocks(acciones);
            setExchange(mercados);
        });
        socket.on('SELL', newInfo => {
            var acciones = stocks;
            var mercados = exchange;
            for (var i = 0; i < acciones.length; i++) {
                if (newInfo.ticker == acciones[i].ticker) {
                    acciones[i].volume += newInfo.volume;
                    for (var j = 0; j < mercados.length; j++) {
                        var boolee = mercados[j].lista.includes(acciones[i].name);
                        if (boolee) {
                            mercados[j].sell += newInfo.volume;
                            mercados[j].total += newInfo.volume;
                        }
                        mercados[j].final += newInfo.volume;
                        mercados[j].participation = (mercados[j].total / mercados[j].final) * 100;
                    }
                }
            }
            setStocks(acciones);
            setExchange(mercados);
        });
    }, []);

    closeBtn.onclick = function(e) {
        e.preventDefault();
    
        // Close the WebSocket.
        socket.close();
    
        return false;
    };

  return (
    <div className="App">
      
     <div>
        <h1 text-align="center" >Acciones</h1>

        <h2>Mercados de Valores</h2>

        <table id="exchange">
            <thead>
            <tr>{colu2.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
            {exchange.map((k, i) => {
                return (
                <tr key={i}>
                    <td>{k.name}</td>
                    <td>{k.buy}</td>
                    <td>{k.sell}</td>
                    <td>{k.total}</td>
                    <td>{k.quantity}</td>
                    <td>{k.participation}</td>
                </tr>
                );
            })}
            </tbody>
        </table>

        <br></br>
        
        <h2>Acciones</h2>
        
        <table id="stocks">
            <thead>
            <tr>{colu.map((h, i) => <th key={i}>{h.Header}</th>)}</tr>
            </thead>
            <tbody>
            {stocks.map((k, i) => {
                return (
                <tr key={i}>
                    <td>{k.ticker}</td>
                    <td>{k.value}</td>
                    <td>{k.change}</td>
                    <td>{k.highest}</td>
                    <td>{k.lowest}</td>
                    <td>{k.volume}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        
        
        {data2.map((accion) => {
            return(
                <div>
                <h2>{accion.ticker}</h2>
                <LineChart key={Math.random()} width={500} height={300} data={accion.value} >
                    <XAxis dataKey="time" />
                    <YAxis label={{ value: "Precio", position: "insideLeft", angle: -90 }} />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line dataKey="value" type="monotone" stroke="#82ca9d" activeDot={{ r: 8 }} isAnimationActive={false} />
                    <Tooltip />
                </LineChart>
                </div>
            );
        })}
        
        </div>
    </div>
  );
}

export default App;
