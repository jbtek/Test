
import io from 'socket.io-client';
export default class SocketConnection {
    constructor(){
        this.socket = io('http://kaboom.rksv.net/watch');
    }
    subscribe(){

       var CLIENT_ACKNOWLEDGEMENT = 1;
       //In emit third parameter is taking [ack] but it is from server
       //When emiting and passing the 1 its not updating the real data.
       this.socket.emit('sub', {state:true}, CLIENT_ACKNOWLEDGEMENT, function(data){
            console.log('acdkkkkk', data);
        });
    }

    unsubscribe(){
        this.socket.emit('unsub', {state:false});
    }
}