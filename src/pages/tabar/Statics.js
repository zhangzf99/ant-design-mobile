import React from 'react'
import { List } from 'antd-mobile';


class Statics extends React.Component{
    constructor(props){
        super(props);
        this.state={
          
        }
    }
   
  
    inventortStatics=()=>{
        this.props.history.push('/statics/inventorystattics')
    }

  
    priceStatics=()=>{
        this.props.history.push('/statics/pricestatics')
    }
  
    alarmStatics=()=>{
        this.props.history.push('/statics/alarmstatics')
    }




    render(){
        const Item = List.Item;
        return(
            　<div>
                  <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>分析统计</p>}>
                   <Item extra="查看" thumb="./icons/客户.png" arrow="horizontal"  onClick={() =>this.inventortStatics()}>商品库存统计</Item>
                   <Item extra="查看" thumb="./icons/客户.png" arrow="horizontal" onClick={() =>this.priceStatics()} >商品价格统计</Item>
                   <Item extra="查看" thumb="./icons/客户.png" arrow="horizontal" onClick={() =>this.alarmStatics()} >商品库存报警统计</Item>
                </List>


            </div>
        )
    }

}
export default Statics;
 