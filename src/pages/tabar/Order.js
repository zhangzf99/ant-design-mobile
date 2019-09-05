// 这是页面底部的订单组件页面
import React from 'react'
import { List } from 'antd-mobile';


class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
  
    componentDidMount(){
      alert(1)
    }


// 添加采购订单
    InsertBuyOrder=()=>{
      this.props.history.push('/order/insertbuyorder')
    }

//添加销售订单
    InsertSaleOrder=()=>{
      this.props.history.push('/order/insertsaleorder')
    }



  
// 历史采购订单查看进行跳转历史采购订单查看进行跳转
   goHisBuyOrder=()=>{
      this.props.history.push('/order/hisbuyorder')
   }

//历史销售订单查看进行跳转
   goHisSaleOrder=()=>{
     this.props.history.push('/order/hissaleorder')
   }


    render(){
        const Item = List.Item;
       
        return(
            <div>
               <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>订单</p>}>
                   <Item extra="添加" arrow="horizontal" onClick={() =>this.InsertBuyOrder()} thumb="./九宫格/出库.png" multipleLine>
                     采购订单
                   </Item>
                   <Item extra="添加" arrow="horizontal" onClick={() => this.InsertSaleOrder()} thumb="./九宫格/出库.png" multipleLine>
                     销售订单
                   </Item>
                   <Item extra="查看" arrow="horizontal" onClick={() =>this.goHisBuyOrder()} thumb="./九宫格/出库.png" multipleLine>
                     历史采购订单
                   </Item>
                   <Item extra="查看" arrow="horizontal" onClick={() => this.goHisSaleOrder()} thumb="./九宫格/出库.png" multipleLine>
                     历史销售订单
                   </Item>
               </List>
           

            </div>
        )
    }

}
export default Order;
 