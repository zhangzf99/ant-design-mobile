import React from 'react'
import { List } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';
import axios from '../http/axios'


class InventoryStatics extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:[],
            number:[]
        }
    }

    componentWillMount(){
       this.findAllInventory();
    }

    findAllInventory(){
       axios.get('/inventory/findAll')
       .then((result)=>{
           var name1 =[];
           var number1 =[];
           result.data.map((item)=>{
               name1.push(item.productname);
               number1.push(item.number);
              
           })
           this.setState({
            name:name1,
            number:number1
        })
       })
       .catch()
    }

    render(){
        console.log(this.state.name)
          const {name,number} =this.state
          const  option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    // interval 是指间隔多少个类别画栅格，为 0 时则每个数据都画，为 1 时间隔 1 个画，以此类推。
                    //解决x轴每隔一个不显示的问题
                    axisLabel :{
                        interval:0
                    },
                    data :name,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:number
                }
            ]
        };
        return(
            <div>
                <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>商品库存统计</p>}></List>
                <ReactEcharts  option={option} style={{height:'200px',width:'100%'}}/>
            </div>
        )
    }

}

export default InventoryStatics;