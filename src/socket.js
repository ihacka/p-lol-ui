'use strict';

import { connect } from "socket.io-client";
// import io from "socket.io-client";
import StateManager from "./state.js";

import Stomp from 'stompjs';

import webstomp from 'webstomp-client';


function init() {
    // let old_socket = null;
    // if(socket) {
    //     old_socket = socket;
    // }
    // ws_connect(old_socket);

   // let destination = '/topic/play';
   //  let client = new Stomp('http://p-lol.herokuapp.com/websocket');
   //
   //  client.connect(function(sessionId) {
   //      client.subscribe(destination, function(body, headers) {
   //          console.log('This is the body of a message on the subscribed queue:', body);
   //      });
   //
   //      client.publish(destination, 'Oh herrow');
   //  });

    let socket = new SockJS('http://p-lol.herokuapp.com/websocket');
    let stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        // setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/play', function (incident) {
            showGreeting(incident.body);
        });
    });


}

function handlePushNotification(data) {
    console.log('web sockets data:', data);
    let ln = data.length;
    let obj = {};

    try{
        obj = JSON.parse(JSON.stringify(StateManager.getStore().get().data));
    }catch(e){
        console.log('ERROR', e);
        obj = {};
    }

    let itm = {};

    // while(ln--){
    //     itm = data[ln];
    //     if( !obj[itm.year]){ obj[itm.year] = {}; } //year
    //     if( !obj[itm.year][itm.month]){ obj[itm.year][itm.month] = {}; } //month
    //     if( !obj[itm.year][itm.month][itm.day]){ obj[itm.year][itm.month][itm.day] = {}; } //day
    //     if( !obj[itm.year][itm.month][itm.day][itm.id]){ obj[itm.year][itm.month][itm.day][itm.id] = {}; } //id
    //     obj[itm.year][itm.month][itm.day][itm.id] = itm;
    // }
    //
    // let descriptionsObj = {};
    // let count = 0;
    // for (let event in data){
    //     let r_event = data[event];
    //     if (r_event['description'].length > 0){
    //         let key = r_event['date'] + '_' + count;
    //         descriptionsObj[key] = 'display_none';
    //     }
    //     count++;
    // }

    StateManager.getStore().merge({
        data: obj
    });


}

function ws_connect(old_socket) {

    let socket = new io.Socket('http://p-lol.herokuapp.com/websocket');
    // socket.connect();
    // socket.on('connect', function (s) {
        // socket.on('authenticated', function () {
        //   console.log('authenticated!');
        // }).emit('authenticate', { hash });
        //
        // socket.on('authentication_failed', function(){
        //   console.log('not authenticated!');
        // });

    //     socket.join('websocket');
    //     socket.join('/topic/play');
    // });

    socket.on('connect',function() {
        console.log('Client has connected to the server!');
    });

    socket.on('message',function(data) {
        console.log('Received a message from the server!',data);
    });

    socket.on('/topic/play', function(data){
        handlePushNotification(data);
    });
}

export default init;
