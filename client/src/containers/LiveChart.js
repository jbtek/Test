import React from 'react'
import Chart from '../components/Chart';
import { convertStrArrayToObjArray } from "../utils/Utils"

import { TypeChooser } from "react-stockcharts/lib/helper";
import useSocket from '../hooks/useSocket';
const LiveChart = () => {
    const {socketData, socketError} = useSocket();
    const headers = 'date,open,high,low,close,volume'.split(',');
    let mappedData = []
    if(socketData){
        mappedData = convertStrArrayToObjArray([socketData],['date','open','high','low','close','volume'])
    }
    /**
     * Display chart here, updated chart, May be I need to read more about D3 live chart.
     * I am leaving here for now. This <Chart> component expecting different date
     * but in live update date is unique others properties are changing I think.
     */
    // const elm = mappedData.length ? (<TypeChooser>
    //         {type => <Chart type={type} data={mappedData} />}
    //     </TypeChooser>): <div>Fetching Data....</div>
    const elm = <div>Display Live chart here data: {JSON.stringify(mappedData)}</div>
    return(
        elm
    )
    
}

export default LiveChart