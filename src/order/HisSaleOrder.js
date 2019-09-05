// 这是订单页面跳转后的查看历史采购订单的组件
import React from 'react'
import axios from '../http/axios'
import { List } from 'antd-mobile';


class HisSaleOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
           saleorder:[]
        }
    }

   componentWillMount(){
       this.findAllSaleOrder();
   }
    
//  查询所有的购买订单
     findAllSaleOrder(){
         axios.get('/saleorder/findAllWithCustomer')
         .then((result)=>{
            this.setState({
                saleorder:result.data
            })
         })
         .catch()
     }


    render(){
        const Item = List.Item;
        const Brief = Item.Brief;
        return(
            <div>
                 {/* 历史采购订单的列表 */}
                 <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>历史销售订单</p>}>
                    {/* 循环生成每一个产品的item项 */}
                  {this.state.saleorder.map(item=>{
                       return <Item key={item.id} multipleLine onClick={() => {}}>
                                 {item.productname}
                                 <Brief>
                                   <span>采购时间:{item.data}</span>
                                   <span>采购数量:{item.number}</span>
                                   <span>顾客:{item.customer.name}</span>
                                 </Brief>
                              </Item>
                  })}
                </List>
            </div>
        )
    }
}

export default HisSaleOrder;