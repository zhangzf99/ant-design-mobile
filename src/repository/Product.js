import React from 'react'
import axios from '../http/axios'
import { List } from 'antd-mobile';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            producct:[]
        }
    }
   componentWillMount(){
       this.findAllProduct();
   }
    //获取所有产品
    findAllProduct(){
       axios.get('/product/findAllWithCategory')
       .then((result)=>{
           this.setState({
               producct:result.data
           })
       })
       .catch((error)=>{
       })
       }

    


    render(){
        const Item = List.Item;
        const Brief = Item.Brief;

        return(
            <div>
                {/* 商品总览的列表 */}
                <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>商品总览</p>}>
                    {/* 循环生成每一个产品的item项 */}
                  {this.state.producct.map(item=>{
                       return <Item key={item.id} multipleLine onClick={() => {}}>
                                 {item.name}
                                 <Brief>
                                   <span>库存:{item.inventorynum}</span>
                                   <span>描述:{item.description}</span>
                                   <span>价格:{item.price}</span>
                                   <span>种类:{item.category.name}</span>
                                 </Brief>
                              </Item>
                  })}
                
                </List>
            </div>
        )
    }
}

export default Product;