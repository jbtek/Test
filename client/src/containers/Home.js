import React from 'react'
import Chart from '../components/Chart';
import NoDataORError from '../components/NoDataORError';
import useDataApi from '../hooks/useDataApi'
import {convertStrArrayToObjArray} from '../utils/Utils';
import { TypeChooser } from "react-stockcharts/lib/helper";
const Home = () => {
const params = {
    'interval':1
}
const {isLoading, newData, errorMsg} = useDataApi(null,'historical','get', params);
let mappedData = newData.length ? convertStrArrayToObjArray(newData,['date','open','high','low','close','volume']): []
let elm = <TypeChooser>
{type => <Chart type={type} data={mappedData} />}
</TypeChooser>
if(errorMsg || newData.length === 0 || isLoading){
    const len = newData.length;
    const message = {errorMsg, len, isLoading}
    elm = <NoDataORError message={message}/>
}
return(elm)
}

export default Home