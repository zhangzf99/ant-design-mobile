import React from 'react'
import { List, Result } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';
import axios from '../http/axios'


class AlarmStatics extends React.Component{
      constructor(props){
          super(props);
          this.state={ 
              data:[],
              name:[]
          }
      }
  

      componentWillMount(){
           this.findAllInventory();
      }

      findAllInventory(){
          axios.get('/inventory/findAll')
          .then((result)=>{
              let data1=[];
              let data3 =[];
             result.data.map((item)=>{
                 if(item.number<=100){
                     data1.push(item);
                     data3.push(item.productname)
                 }
              })
              let data2=data1.map((item)=>{
                  return {
                      value:item.number,
                      name:item.productname
                  }
              })      
             this.setState({
                data:data2,
                name:data3
            })
         
          })
      }
      


      render(){
            const {data,name} = this.state;
            const  option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                padding: 5,
                left: 'center',
                data: name
            },
            series : [
                {
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        
          return(
              <div>
                 <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>商品库存报警统计</p>}></List>

                 <ReactEcharts  option={option} style={{height:'400px',width:'100%'}}/>
              </div>
          )
      }
}

export default AlarmStatics;