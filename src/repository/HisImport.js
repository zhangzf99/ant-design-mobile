// 九宫格中历史入库组件

import React from 'react'
import axios from '../http/axios'
import { List } from 'antd-mobile';

class HisImport extends React.Component{
    constructor(props){
        super(props);
        this.state={
           import:[]
        }
    }

    componentWillMount(){
         this.findAllImport();
    }
  
    // 获取所有的入库信息
    findAllImport(){
       axios.get('/import/findAllWithUser')
       .then((result)=>{
           if(result.status === 200){
               this.setState({
                   import:result.data
               })
           }
       })
       .catch()
    }
   



    render(){
        const Item = List.Item;
        const Brief = Item.Brief;
        return(
            <div>
                 {/* 历史入库的列表 */}
                 <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>历史入库总览</p>}>
                    {/* 循环生成每一个产品的item项 */}
                  {this.state.import.map(item=>{
                       return <Item key={item.id} multipleLine onClick={() => {}}>
                                 {item.productname}
                                 <Brief>
                                   <span>入库时间:{item.data}</span>
                                   <span>入库数量:{item.number}</span>
                                   <span>操作人:{item.user.name}</span>
                                 </Brief>
                              </Item>
                  })}
                
                </List>
            </div>
        )
    }
}

export default HisImport;