const region = ['Pune','Mumbai','Delhi'];

const users = {
    [region[0]] : [
                    {
                        orderNo : 1,
                        userName : 'Ray'
                    },
                    {
                        orderNo : 2,
                        userName : 'John'
                    },
                    {
                        orderNo : 3,
                        userName : 'Alex'
                    },
                    {
                        orderNo : 4,
                        userName : 'Claudal'
                    },
                    {
                        orderNo : 5,
                        userName : 'Susain'
                    },
                    {
                        orderNo : 6,
                        userName : 'Mac'
                    }
                 ],
    [region[1]] : [
                    {
                        orderNo : 7,
                        userName : 'Rayin'
                    },
                    {
                        orderNo : 8,
                        userName : 'Johny'
                    },
                    {
                        orderNo : 9,
                        userName : 'Alexander'
                    },
                    {
                        orderNo : 10,
                        userName : 'Clay'
                    },
                    {
                        orderNo : 11,
                        userName : 'Sus'
                    },
                    {
                        orderNo : 12,
                        userName : 'joye'
                    }
            ] ,

    [region[2]] :  [
                    {
                        orderNo : 13,
                        userName : 'Rachel'
                    },
                    {
                        orderNo : 14,
                        userName : 'Monika'
                    },
                    {
                        orderNo : 15,
                        userName : 'Ross'
                    },
                    {
                        orderNo : 16,
                        userName : 'Clay'
                    },
                    {
                        orderNo : 17,
                        userName : 'Emma'
                    },
                    {
                        orderNo : 18,
                        userName : 'Pheeb'
                    }
             ]
}



const orders = {
    Region1 :   {city : region[0],
                 order : [
                                {
                                    orderNo : 1,
                                    orderAmount : 1000,
                                    orderQuantity : 1,
                                    orderStatus : 'Confirmed',
                                    userName : 'Ray',
                                    date : '12-12-2020',
                                    city : region[0]

                                },
                                {
                                    orderNo : 2,
                                    orderAmount : 2000,
                                    orderQuantity : 2,
                                    orderStatus : 'shipped',
                                    userName : 'John',
                                    date : '06-12-2020',
                                    city : region[0]
                                },
                                {
                                    orderNo : 3,
                                    orderAmount : 3000,
                                    orderQuantity : 3,
                                    orderStatus : 'delivered',
                                    userName : 'Alex',
                                    date : '19-11-2020',
                                    city : region[0]
                                },
                                {
                                    orderNo : 4,
                                    orderAmount : 4000,
                                    orderQuantity : 4,
                                    orderStatus : 'Confirmed',
                                    userName : 'Claudal',
                                    date : '25-11-2020',
                                    city : region[0]
                                },
                                {
                                    orderNo : 5,
                                    orderAmount : 5000,
                                    orderQuantity : 5,
                                    orderStatus : 'shipped',
                                    userName : 'Susain',
                                    date : '10-11-2020',
                                    city : region[0]
                                },
                                {
                                    orderNo : 6,
                                    orderAmount : 6000,
                                    orderQuantity : 6,
                                    orderStatus : 'delivered',
                                    userName : 'Mac',
                                    date : '10-12-2020',
                                    city : region[0]
                                }
                              ]
                },

    Region2 :  {city : region[1],
                order : [
                               {
                                   orderNo : 7,
                                   orderAmount : 1000,
                                   orderQuantity : 1,
                                   orderStatus : 'Confirmed',
                                   userName : 'Rayin',
                                   date : '10-12-2020',
                                   city : region[1]
                               },
                               {
                                   orderNo : 8,
                                   orderAmount : 2000,
                                   orderQuantity : 2,
                                   orderStatus : 'shipped',
                                   userName : 'Johny',
                                   date : '10-11-2020',
                                   city : region[1]
                               },
                               {
                                   orderNo : 9,
                                   orderAmount : 3000,
                                   orderQuantity : 3,
                                   orderStatus : 'delivered',
                                   userName : 'Alexander',
                                   date : '25-11-2020',
                                   city : region[1]
                               },
                               {
                                   orderNo : 10,
                                   orderAmount : 4000,
                                   orderQuantity : 4,
                                   orderStatus : 'Confirmed',
                                   userName : 'Clay',
                                   date : '19-11-2020',
                                   city : region[1]
                               },
                               {
                                   orderNo : 11,
                                   orderAmount : 5000,
                                   orderQuantity : 5,
                                   orderStatus : 'shipped',
                                   userName : 'Sus',
                                   date : '06-12-2020',
                                   city : region[1]
                               },
                               {
                                   orderNo : 12,
                                   orderAmount : 6000,
                                   orderQuantity : 6,
                                   orderStatus : 'delivered',
                                   userName : 'joye',
                                   date : '12-12-2020',
                                   city : region[1]
                               }
                             ]
               },
    Region3:  {city : region[2],
               order : [
                              {
                                  orderNo : 13,
                                  orderAmount : 1000,
                                  orderQuantity : 1,
                                  orderStatus : 'Confirmed',
                                  userName : 'Rachel',
                                  date : '12-12-2020',
                                  city : region[2]
                              },
                              {
                                  orderNo : 14,
                                  orderAmount : 2000,
                                  orderQuantity : 2,
                                  orderStatus : 'shipped',
                                  userName : 'Monika',
                                  date : '06-12-2020',
                                  city : region[2]
                              },
                              {
                                  orderNo : 15,
                                  orderAmount : 3000,
                                  orderQuantity : 3,
                                  orderStatus : 'delivered',
                                  userName : 'Ross',
                                  date : '19-11-2020',
                                  city : region[2]
                              },
                              {
                                  orderNo : 16,
                                  orderAmount : 4000,
                                  orderQuantity : 4,
                                  orderStatus : 'Confirmed',
                                  userName : 'Clay',
                                  date : '25-11-2020',
                                  city : region[2]
                              },
                              {
                                  orderNo : 17,
                                  orderAmount : 5000,
                                  orderQuantity : 5,
                                  orderStatus : 'shipped',
                                  userName : 'Emma',
                                  date : '25-11-2020',
                                  city : region[2]
                              },
                              {
                                  orderNo : 18,
                                  orderAmount : 6000,
                                  orderQuantity : 6,
                                  orderStatus : 'delivered',
                                  userName : 'Pheeb',
                                  date : '23-11-2020',
                                  city : region[2]
                              }
                            ]
              }

};


export {orders, region, users};