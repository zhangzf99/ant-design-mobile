// 这是九宫格中的库存总览
import React from 'react'
import { List } from 'antd-mobile';
import axios from '../http/axios'

class Inventory extends React.Component{
    constructor(props){
        super(props);
        this.state={
           inventory:[]
        }
    }


    componentWillMount(){
         this.findAllInventory();
    }

    findAllInventory(){
        axios.get('/inventory/findAll')
        .then((result)=>{
            this.setState({
                inventory:result.data
            })
        })
    }
     
    render(){
        const Item = List.Item;
         const Brief = Item.Brief;
        return(
            <div>
                <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>商品库存总览</p>}>
                    {this.state.inventory.map(item=>{
                       return <Item key={item.id} multipleLine >
                             {item.productname}
                             <Brief>
                               <span>库存量:{item.number}</span>
                             </Brief>
                        </Item>
                    })}
                
                </List>
            </div>
        )
    }
}
export default Inventory;