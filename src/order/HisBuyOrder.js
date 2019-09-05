// 这是订单页面跳转后的查看历史采购订单的组件
import React from 'react'
import axios from '../http/axios'
import { List } from 'antd-mobile';


class HisBuyOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
           buyorder:[]
        }
    }

   componentWillMount(){
       this.findAllBuyOrder();
   }
    
//  查询所有的购买订单
     findAllBuyOrder(){
         axios.get('/buyorder/ findAllWithProvider')
         .then((result)=>{
            this.setState({
                buyorder:result.data
            })
         })
         .catch()
     }


    render(){
        const Item = List.Item;
        const Brief = Item.Brief;
        // console.log(this.state.buyorder)
        return(
            <div>
                 {/* 历史采购订单的列表 */}
                 <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>历史采购订单</p>}>
                    {/* 循环生成每一个产品的item项 */}
                  {this.state.buyorder.map(item=>{
                       return <Item key={item.id} multipleLine onClick={() => {}}>
                                 {item.productname}
                                 <Brief>
                                   <span>采购时间:{item.data}</span>
                                   <span>采购数量:{item.number}</span>
                                   {/* <span>顾客:{item.provider.name}</span> */}
                                 </Brief>
                              </Item>
                  })}
                </List>
            </div>
        )
    }
}

export default HisBuyOrder;