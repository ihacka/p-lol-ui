'use strict';

import { connect } from "socket.io-client";
// import io from "socket.io-client";
import {branch} from 'baobab-react/higher-order';
import StateManager from "./state.js";

import Stomp from 'stompjs';

import webstomp from 'webstomp-client';



function init() {
    let socket = new SockJS('http://localhost:8080/websocket');
    let stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {

        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/play', function (incident) {
            console.log(incident.body);
            let incidents = StateManager.getStore().get('incidentList');

            let result = Object.keys(incidents).map(function(key) {
                return incidents[key];
            });
            result.pop()

            let firstTeam = '';
            let msToMin = '';
            let secTeam = '';


            let nikos = JSON.parse(incident.body);

            if (nikos.participantType === "HOME") {
                firstTeam = nikos.incidentType
            }
            if (nikos.participantType === "AWAY") {
                secTeam = nikos.incidentType
            }

            let mpla =  { aTeam: firstTeam, minute: nikos.minute, bTeam: secTeam };

            result.unshift(mpla);


            StateManager.getStore().set('incidentList', result);
        });
    });


    //{"id":null,"eventId":11830376,"incidentType":"DANGEROUS_ATTACK","participantType":"HOME","when":1511702863730} 

}

export default init;
