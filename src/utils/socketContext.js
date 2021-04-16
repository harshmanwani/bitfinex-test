import React from 'react';
import socketio from "socket.io-client";
import { SOCKET_URL_PUB } from "./config";

export const socket = socketio.connect(SOCKET_URL_PUB);
export const SocketContext = React.createContext();
