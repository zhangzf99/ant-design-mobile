import React from 'react'
import { List } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';
import axios from '../http/axios'


class PriceStatics extends React.Component{
    constructor(props){
        super(props);
         this.state={
             name:[],
             price:[]
         }
    }


    componentWillMount(){
        this.findAllProduct();
    }
     
    findAllProduct(){
       axios.get('/product/findAll')
       .then((result)=>{
           var name1=[];
           var price1=[];
           result.data.map(item=>{
              name1.push(item.name);
              price1.push(item.price)
           })
          this.setState({
              name:name1,
              price:price1
          })
       })
       .catch()
    }



    render(){
        const {name,price} = this.state;
        const option = {
            xAxis: {
                type: 'category',
                data: name
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: price,
                type: 'line'
            }]
        };
        return(
            <div>
                 <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>商品价格统计</p>}></List>
                <ReactEcharts  option={option} style={{height:'200px',width:'100%'}}/>
            </div>
        )
    }

}

export default PriceStatics;