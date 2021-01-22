import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper , Container } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';




const useStyles = makeStyles( (theme) =>( {
  table: {
    minWidth: 650,
  }, 
  Tableroot: {
    maxWidth: '160vh',
    minHeight : 'auto',
    backgroundColor : pink[50],
    paddingTop : theme.spacing(5),
    marginBottom : theme.spacing(4)
  }, 
}));

function createData(OrderNo, TotalAmount, TotalQuantity, UserName) {
  return { OrderNo, TotalAmount, TotalQuantity, UserName};
}

const createRow = ( order ) => {
    const row = [];
    let k=0;
    for(let i in order) {
        if(k>4) {
            break;
        }else {
            k++;
            row.push( createData(order[i].orderNo, order[i].orderAmount, order[i].orderQuantity, order[i].userName ) )
        }
    }

    return row;
}

const SortOrders = (task, order) => {
        if(task == 'a') {
            order.sort((a,b) => (a.orderAmount > b.orderAmount) ? 1 : ((b.orderAmount > a.orderAmount) ? -1 : 0)); 
        } else {
            order.sort((a,b) => (a.orderAmount < b.orderAmount) ? 1 : ((b.orderAmount < a.orderAmount) ? -1 : 0)); 

        }
        console.log(order);
        return order;
}


const TopOrders = (Props) => {
  const classes = useStyles();

  const order = Props.order;

  const orders =  SortOrders( Props.task, order) ;
  const rows = createRow(orders);


  return (
    <Container className={classes.Tableroot} >
      <div className = "detail-table" > {Props.value} five Orders </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Order No</TableCell>
                <TableCell align="right">Total Amount</TableCell>
                <TableCell align="right">Total Quantity</TableCell>
                <TableCell align="right">User Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.UserName}>
                  <TableCell align="right">{row.OrderNo}</TableCell>
                  <TableCell align="right">{row.TotalAmount}</TableCell>
                  <TableCell align="right">{row.TotalQuantity}</TableCell>
                  <TableCell align="right">{row.UserName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  );
}

export default TopOrders;