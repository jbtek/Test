import {useState, useEffect} from 'react';
import SocketConnection from '../socket/SocketConnection';
/**
 * 
 * @param {*} data 
 * @param {*} api 
 * @param {*} method 
 * this hooks is common to make any CRUD(GET POST,PUT,DELETE) operation just need to pass
 * these three params;
 */
const useSocket = () => {
    const [socketData, setSocketData] = useState(null);
    const [socketError, setSocketError] = useState(null);
    /**
     * call useEffect here that takes a call back function and work like
     * life cycles of statefull component:
     * componentDidMount, componentDidUpdate, componentWillUnmount
     * Note: Do not put useEffect in any conditional blocks its always on top.
     * */
    useEffect(() => {
        let socketInstance  = new SocketConnection();
        socketInstance.subscribe();
        //safe to call any api or subscribe some observable or event.
        const fetchData = () => {
            socketInstance.socket.on('data', (data) => {
                setSocketData(data);
            })
            socketInstance.socket.on('error', (err) => {
                setSocketError(err);
            })
        }
        fetchData();
        return () => {
            socketInstance.unsubscribe();
            socketInstance = null;
        }
    }); 

    //return the object with this updated values.
    return {socketData, socketError}
}

export default useSocket