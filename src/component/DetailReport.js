import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {orders} from './data';
import { pink } from '@material-ui/core/colors';
import './main.css'



const SortOrders = ( order) => {
   
        order.sort((a,b) => (a.orderAmount > b.orderAmount) ? 1 : ((b.orderAmount > a.orderAmount) ? -1 : 0)); 
    
    console.log(order);
    return order;
}

const columns = [
  { id: '1', label: 'User Name',align: 'right'},
  { id: '2', label: 'Order No',align: 'right', },
  {
    id: '3',
    label: 'Order Date',
   // minWidth: 170,
    align: 'right',
  },
  {
    id: '4',
    label: 'Order Status',
    align: 'right',
  },
  {
    id: '5',
    label: 'Total Amount',
    align: 'right',
  },
  {
    id: '6',
    label: 'Total Quantity',
    align: 'right',
  },
  {
    id: '7',
    label: 'Total Product Count',
    align: 'right',
  },
];

function createData(userName, OrderNo, date, orderStatus, TotalAmount, TotalQuantity, Totalquantity) {
    return {userName, OrderNo, date, orderStatus, TotalAmount, TotalQuantity, Totalquantity};
  }

const useStyles = makeStyles( (theme) =>( {
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  Tableroot: {
    maxWidth: '160vh',
    minHeight : 'auto',
    backgroundColor : pink[50],
    paddingTop : theme.spacing(5),
    marginBottom : theme.spacing(4)
  }, 
}));

const createRow = ( order ) => {
    const row = [];
 
    for(let i in order) {
            row.push( createData( order[i].userName, order[i].orderNo, order[i].date, order[i].orderStatus, order[i].orderAmount, order[i].orderQuantity, order[i].orderQuantity ) )
        }

    return row;
}

export default function DetailReport() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const AllOrders = [...orders.Region1.order, ...orders.Region2.order, ...orders.Region3.order];
  const Orders =  SortOrders( AllOrders) ;  
  const rows = createRow(Orders);
  console.log(`inside temp all order : ${orders}`);
//  console.log(`inside temp updated order : ${rows}`)




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container className={classes.Tableroot} >
        <div className = "detail-table" > Detail Table </div>
            <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.orderNo}>
            
                            <TableCell  align="right">
                                {row.userName}
                            </TableCell>

                            <TableCell  align="right">
                                {row.OrderNo}
                            </TableCell> {console.log("orderrow " +row.orderNo )}

                            <TableCell align="right">
                                {row.date}
                            </TableCell>

                            <TableCell align="right">
                                {row.orderStatus}
                            </TableCell>

                            <TableCell align="right">
                                {row.TotalAmount}
                            </TableCell>
                            
                            <TableCell  align="right" >
                                {row.Totalquantity}
                            </TableCell>

                            <TableCell align="right" >
                                {row.Totalquantity}
                            </TableCell>
                        </TableRow>
                    );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </Paper>
    </Container>
  );
}