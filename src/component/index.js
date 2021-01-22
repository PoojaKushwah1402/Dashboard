import React from 'react';
import Tile from './tile';
import NavBar from './navbar';
import Chart from './chart';
import {orders, region, users} from './data';
import DenseTable from './TopOrders';
import TopUser from './TopUser';
import Footer from './footer'
import DetailReport from './DetailReport'

class Dashbord extends React.Component{
    constructor() {
        super();
        this.state = {
            Region : region[0],
            order : orders.Region1.order,
            AllOrder : orders
        }
    }

     fetchRegionData = (region) => {
        let order, user

        for(let x in orders) {
            // console.log(x);
            if( orders[x].city == region ) {
                order = orders[x];
                user = users[region];
                break;
            } 
        }

        return {order,user}

    }

     switchRegion = ( reg ) => {
        // console.log(reg);
        const orderDetail = this.fetchRegionData(reg);
        
        this.setState({
            Region : reg,
            order : orderDetail.order.order
        });
    }

    componentDidMount() {
        this.switchRegion(this.state.Region);
    }
    

    render() {
        return (
            <>
                <NavBar region = {this.state.Region} switchRegion = {this.switchRegion} allRegion = {region} />
                     <h1>{this.state.Region}</h1>

                <Tile order = {this.state.order} />
                < Chart order = {this.state.order} />

                  <br />
                < DenseTable order = {this.state.order} task = 'd' value = {"Top"}  />

                <br />
                < DenseTable order = {this.state.order} task = 'a' value = {"Bottom"} />

                <br />
                <TopUser task = 'd' value = {"Top"} />

                <br />
                <TopUser task = 'a' value = {"Bottom"}  />
                <br />
                <DetailReport  />
            
            <Footer/>
            </>
            
        );

    }

}

export default Dashbord;
