import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid , Card, Container, Typography, CardContent } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '180vh',
        minHeight : '25vh',
        backgroundColor : theme.palette.grey[200],
        paddingTop : theme.spacing(5),
        marginBottom : theme.spacing(4)
      }
  }));

    const oneDayOrder = (day, month, year, orders) => {
        let orderCount = [];
        for(let x in orders) {
            const orderDate = orders[x].date.split('-');
                if(orderDate[0] == day && orderDate[1] == month && orderDate[2] == year ) {
                   // console.log('one day ' +orderDate, orders[x]);
                    orderCount.push(orders[x]);
                }
        }
        return (orderCount.length > 0 ? orderCount : false);
    }

    const oneMonthOrder = (month, year, orders) => {
        let orderCount = [];
        for(let x in orders) {
            const orderDate = orders[x].date.split('-');
                if(orderDate[1] == month && orderDate[2] == year ) {
                   // console.log('one month ' +orderDate, orders[x]);
                    orderCount.push(orders[x]);
                }
        }
        return (orderCount.length > 0 ? orderCount : false);
    }

    const oneWeek = (date, month, year, orders) => {
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

    const fetchAmount = order => {
        let amount = 0;
        for(let i in order) {
            amount = order[i].orderAmount + amount;
        }

        return amount;
    }

    
    const fetchOrderDetails = ( orders ) => {
        const date = new Date();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const day = date.getDate();	
        const todayOrder = oneDayOrder(day, month, year, orders) ;
        const lastMonth = oneMonthOrder( month-1, year, orders) ;
        const thisMonth = oneMonthOrder( month, year, orders) ;
        const thisWeek =  oneWeek( day, month, year, orders);
        // console.log(todayOrder,lastMonth,thisMonth,thisWeek);
        //console.log('today'+todayOrder);
        const todayOrderCount = todayOrder.length || 0 ;
        const lastMonthCount = lastMonth.length || 0;
        const thisMonthCount = thisMonth.length || 0;
        const thisWeekCount = thisWeek.length || 0;

        const todayOrderAmount = fetchAmount(todayOrder)
        const lastMonthAmount = fetchAmount(lastMonth);
        const thisMonthAmount = fetchAmount(thisMonth);
        const thisWeekAmount = fetchAmount(thisWeek);

        return {
            today : {
                count : todayOrderCount,
                amount : todayOrderAmount
            },
            thisMonth : {
                count : thisMonthCount,
                amount : thisMonthAmount
            },
            lastMonth : {
                count : lastMonthCount,
                amount : lastMonthAmount
            },
            thisWeek : {
                count : thisWeekCount,
                amount : thisWeekAmount
            }
        }
        
    }

const Tile = ( Props ) => {

    console.log('Tile '+ Props.order)

    const classes = useStyles();
    
    const orderDetails = fetchOrderDetails( Props.order );
    //console.log(orderDetails);


    return (
       <Container className={classes.root} >
           <Grid container spacing={4}>
                <Grid item sm={3} >
                    <Card>
                        <CardContent>
                            <Typography variant="h5" > Week Order Summary</Typography>
                            <Typography variant="subtitle1" >Today's Order : {orderDetails.today.count}</Typography>
                            <Typography variant="subtitle1" >Current Week's Order : {orderDetails.thisWeek.count}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card>
                        <CardContent>
                            <Typography variant="h5" > Week Amount Summary</Typography>
                            <Typography variant="subtitle1" >Today's Amount : {orderDetails.today.amount}</Typography>
                            <Typography variant="subtitle1" >Current Week's Amount : {orderDetails.thisWeek.amount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card>
                        <CardContent>
                            <Typography variant="h5" > Month Order Summary</Typography>
                            <Typography variant="subtitle1" >Current Month's Order : {orderDetails.thisMonth.count}</Typography>
                            <Typography variant="subtitle1" >Last Month's Order : {orderDetails.lastMonth.count}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card>
                        <CardContent>
                            <Typography variant="h5" > Month Amount Summary</Typography>
                            <Typography variant="subtitle1" >Current Month's  Amount : {orderDetails.thisMonth.amount}</Typography>
                            <Typography variant="subtitle1" >Last Month'sAmount : {orderDetails.lastMonth.amount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
           </Grid>
       </Container>
    )
}

export default Tile;
