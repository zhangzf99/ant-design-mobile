// 这是订单页面跳转后的查看历史采购订单的组件
import React from 'react'
import axios from '../http/axios'
import { List } from 'antd-mobile';


class Provider extends React.Component{
    constructor(props){
        super(props);
        this.state={
           provider:[]
        }
    }

   componentWillMount(){
       this.findAllProvider();
   }
    
//  查询所有的购买订单
     findAllProvider(){
         axios.get('/provider/findAll')
         .then((result)=>{
            this.setState({
                provider:result.data
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
                 <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>供应商总览</p>}>
                    {/* 循环生成每一个产品的item项 */}
                  {this.state.provider.map(item=>{
                       return <Item key={item.id} multipleLine onClick={() => {}}>
                                 {item.name}
                                 <Brief>
                                   <span>电话:{item.telephone}</span>
                                   <span>地址:{item.address}</span>
                                 </Brief>
                              </Item>
                  })}
                </List>
            </div>
        )
    }
}

export default Provider;