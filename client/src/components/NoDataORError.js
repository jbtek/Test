import React from 'react'
const NoDataORError = ({message}) => {
const {errorMsg, len, isLoading} = message;
let elm = len === 0 ? 
(<div className='nodata-found'>Data records: {len}</div>): <div className='error-found'>Error fetching data: {errorMsg}</div>
 if(isLoading){
     elm = <div className='nodata-found'>Data is fetching.....</div>
 }   

return(
        elm
    )
}

export default NoDataORError