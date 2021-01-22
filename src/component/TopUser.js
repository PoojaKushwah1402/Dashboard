import {orders} from './data';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper , Container } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';



const useStyles = makeStyles( (theme) =>( {
  table: {
    minWidth: 650,
  }, 
  Tableroot: {
    maxWidth: '160vh',
    minHeight : 'auto',
    backgroundColor : cyan[50],
    paddingTop : theme.spacing(5),
    marginBottom : theme.spacing(4)
  }, 
}));

const SortOrders = (task, order) => {
    if(task == 'a') {
        order.sort((a,b) => (a.orderAmount > b.orderAmount) ? 1 : ((b.orderAmount > a.orderAmount) ? -1 : 0)); 
    } else {
        order.sort((a,b) => (a.orderAmount < b.orderAmount) ? 1 : ((b.orderAmount < a.orderAmount) ? -1 : 0)); 

    }
    console.log(order);
    return order;
}


function createData(UserName, TotalAmount, TotalQuantity, City) {
    return { UserName, TotalAmount, TotalQuantity, City};
  }
  
  const createRow = ( order ) => {
      const row = [];
      let k=0;
      for(let i in order) {
          if(k>4) {
              break;
          }else {
              k++;
              row.push( createData(order[i].userName, order[i].orderAmount, order[i].orderQuantity, order[i].city ) )
          }
      }
  
      return row;
  }

const TopUsers = ( Props ) => {

    const classes = useStyles();

    const AllOrders = [...orders.Region1.order, ...orders.Region2.order, ...orders.Region3.order];

    const Orders =  SortOrders( Props.task, AllOrders) ;
    const rows = createRow(Orders);


  return (
    <Container className={classes.Tableroot} >
      <div className = "detail-table" > {Props.value} Five Users</div>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Total Quantity</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.UserName}>
              <TableCell align="right">{row.UserName}</TableCell>
              <TableCell align="right">{row.TotalAmount}</TableCell>
              <TableCell align="right">{row.TotalQuantity}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}


export default TopUsers;