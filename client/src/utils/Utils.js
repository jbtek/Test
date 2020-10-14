import {ascending} from 'd3-array';

/**
 * convert string to array and create object with given props
 * @param {*} str 
 */
 export const convertStrArrayToObjArray = (arr, props = []) => {
    if(!arr.length && !props.length) return [];
    arr = arr.map(item => {
        if(item){
            item = reduce(props, item.trim().split(','));
        }
        return item;
    });
    
    const sortedArray = arr.slice().sort((a, b) => ascending(a.date, b.date))
    return sortedArray;
}

/**
 * it returns object 
 * @param {*} props 
 * @param {*} arr 
 */
export const reduce = (props, arr) => {
    const obj = arr.reduce((acc, cur, i) =>{
        const key = props[i];
        if(key){
            if(key === 'date'){
                acc[key] = getISTDate(cur);
            } else{
                acc[key] = cur;
            }
        }
        return acc;
      }, {});
      return obj;
}

export function getISTDate(strDate) {
    const milliseconds = parseInt(strDate);
    const convertedDate = new Date(milliseconds);
	return convertedDate
}


