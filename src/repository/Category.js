// 这是九宫格中的产品分类
import React from 'react'
import { List } from 'antd-mobile';
import axios from '../http/axios'

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state={
           category:[]
        }
    }


    componentWillMount(){
         this.findAllCategory();
    }

    findAllCategory(){
        axios.get('/category/findAll')
        .then((result)=>{
            this.setState({
                category:result.data
            })
        })
    }
     
    render(){
        const Item = List.Item;
     
        return(
            <div>
                <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>商品分类总览</p>}>
                    {this.state.category.map(item=>{
                       return <Item >{item.name}</Item>
                    })}
                
                </List>
            </div>
        )
    }
}
export default Category;