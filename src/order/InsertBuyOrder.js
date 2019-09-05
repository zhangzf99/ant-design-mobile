// 这是九宫格中的新增入库
import React from 'react'
import { List, InputItem,Button, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from '../http/axios';



class InsertBuyOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
             provider:[],
        }
    }

    componentWillMount(){
        this.findAllProvider();
    }

//获取到所有的用户并且修改数据格式
    findAllProvider(){
      axios.get('/provider/findAll')
      .then((result)=>{
         var a=result.data.map(item=>{
               delete item.telephone
               delete item.address
               delete item.status
               var bbb= JSON.parse(JSON.stringify(item).replace(/id/g,"value"));
               var ccc= JSON.parse(JSON.stringify(bbb).replace(/name/g,"label"));
               return ccc
          })
          this.setState({
            provider:a
          })
      })
      .catch()
    }

//点击按钮进行添加
    onSubmit = () => {
        this.props.form.validateFields((err, values) =>{
           if (!err) {
            axios.post('/buyorder/saveOrupdate',values)
             .then((result)=>{
                 if(result.status === 200){
                     alert(1)
                 }
             })
            // console.log(values);
          } else {
            alert('Validation failed');
          }
        });
      }
     
    render(){
        const {getFieldProps} = this.props.form;
        const {provider} =this.state;
        const Item = List.Item;
        return(
            <div>
                <form>
                <List
                    renderHeader={() => <p style={{textAlign:'center',margin:0}}>添加采购订单</p>}
                >
                    <InputItem
                    {...getFieldProps('productname')}
                    clear
                    placeholder="请输入产品名称"
                    >
                        产品名称
                    </InputItem>
                    
                    <InputItem
                    {...getFieldProps('number')}
                    clear
                    placeholder="请输入采购数量"
                    >
                       采购数量
                    </InputItem>


                    <Picker data={provider} cols={1} {...getFieldProps('providerId')} className="forss" >
                        <List.Item arrow="horizontal">供货商</List.Item>
                    </Picker>
                    <Item>
                    <Button type="primary" size="small" inline onClick={this.onSubmit}>提交</Button>
                    </Item>
                </List>
                </form>
          </div>
        )
    }
}
export default  createForm()(InsertBuyOrder);