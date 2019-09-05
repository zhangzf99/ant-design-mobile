import React from 'react'
import { List } from 'antd-mobile';

class People extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
  
 //跳转到查询所有顾客的页面
    goFindAllCustomer=()=>{
        this.props.history.push('/people/customer')
    }

// 跳转到查询所有供应商的页面
   goFindAllProvider=()=>{
       this.props.history.push('/people/provider')
   }

//跳转到添加顾客的页面
   insertCustomer=()=>{
       this.props.history.push('/people/insertcustomer')
   }

   insertProvider=()=>{
       this.props.history.push('/people/insertprovider')
   }


    render(){
        const Item = List.Item;
        
        return(
            <div>
                <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>客户</p>}>
                   <Item extra="新增" thumb="./icons/客户.png" arrow="horizontal" onClick={() => this.insertCustomer()}>顾户</Item>
                   <Item extra="新增" thumb="./icons/客户.png" arrow="horizontal" onClick={() => this.insertProvider()}>供应商</Item>
                   <Item extra="查看" thumb="./icons/客户.png" arrow="horizontal" onClick={() => this.goFindAllCustomer()}>顾户管理</Item>
                   <Item extra="查看" thumb="./icons/客户.png" arrow="horizontal" onClick={() => this.goFindAllProvider()}>供应商管理</Item>
                </List>

            </div>
        )
    }

}
export default People;
 