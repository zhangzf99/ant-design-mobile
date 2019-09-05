// 这是九宫格中的新增入库
import React from 'react'
import { List, InputItem,Button, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from '../http/axios';



class InsertSaleOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
             customer:[],
        }
    }

    componentWillMount(){
        this.findAllCustomer();
    }

//获取到所有的用户并且修改数据格式
    findAllCustomer(){
      axios.get('/customer/findAll')
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
            customer:a
          })
      })
      .catch()
    }

//点击按钮进行添加
    onSubmit = () => {
        this.props.form.validateFields((err, values) =>{
           if (!err) {
            axios.post('/saleorder/saveOrupdate',values)
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
        const {customer} =this.state;
        const Item = List.Item;
        return(
            <div>
                <form>
                <List
                    renderHeader={() => <p style={{textAlign:'center',margin:0}}>添加销售订单</p>}
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
                    placeholder="请输入销售数量"
                    >
                       销售数量
                    </InputItem>


                    <Picker data={customer} cols={1} {...getFieldProps('customerId')} className="forss" >
                        <List.Item arrow="horizontal">顾客</List.Item>
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
export default  createForm()(InsertSaleOrder);