import React from 'react';
import { Line } from 'react-chartjs-2';

const getLabels = (day, month, year) => {

    let label = [];

    for(let i=0; i<7; i++) {

        label.push(`${day}-${month}-${year}`)

        if(!( day - 1 > 0 )) {
            day = 31;
            month = month-1;
        }
        day--;
    }

    return label;
} 

const OneWeek = (date, month, year, orders) => {
    let orderCount = [];
    const enddate = (date>7 ? date-7 : false )
   
    if(!enddate) {
        enddate = 1;
    }

    for(let x in orders) {
        const orderDate = orders[x].date.split('-');
            if( (orderDate[2] == year) && ( (orderDate[0] >= enddate && orderDate[0] <=date && orderDate[1] ==month)   ) ) {
               // console.log( 'one week ' + orderDate, orders[x]);
                orderCount.push(orders[x]);
            }
    }
    return (orderCount.length > 0 ? orderCount : false);
}


const setData = (label, order) => {
    let dataArray = new Array(7);
    dataArray.fill(0);

    for(let i in order) {
        let index = order[i].date;
        let value = label.indexOf(index)
        dataArray[value] = order[i].orderAmount ;
    }

    return dataArray;
}


const Chart = ( Props ) => {

    console.log('Chart '+ Props.order)
    const date = new Date();
    const order = 'order';
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const day = date.getDate();	
    const label = getLabels(day, month, year );
    const oneWeek = OneWeek(day, month, year, Props[order]);
    const dataSet = setData(label, oneWeek);



    const data = {
        labels : label.reverse(),
        datasets : [
            {
                label : 'Order Amount',
                data : dataSet,
                backgroundColor: 'transparent',
                borderColor : 'Pink',
                pointBackgroundColor : 'Black',
            }
        ]
    }


    return (
        <div className = "container">
            <h3>Daily Order Trend</h3>
            < Line data = {data} />
        </div>
    )
}

export default Chart;