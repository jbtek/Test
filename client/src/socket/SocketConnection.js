
import io from 'socket.io-client';
export default class SocketConnection {
    constructor(){
        this.socket = io('http://kaboom.rksv.net/watch');
    }
    subscribe(){
        this.socket.emit('sub', {state:true});
    }

    unsubscribe(){
        this.socket.emit('unsub', {state:false});
    }
}