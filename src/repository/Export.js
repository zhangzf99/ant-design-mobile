// 这是九宫格中的新增入库
import React from 'react'
import { List, InputItem,Button, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from '../http/axios';



class Import extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:[],
        }
    }

    componentWillMount(){
        this.findAllUser();
    }

//获取到所有的用户并且修改数据格式
    findAllUser(){
      axios.get('/user/findAll')
      .then((result)=>{
         var a=result.data.map(item=>{
               delete item.gender
               delete item.phonenum
               delete item.password
               delete item.status
               delete item.roleId
               var bbb= JSON.parse(JSON.stringify(item).replace(/id/g,"value"));
               var ccc= JSON.parse(JSON.stringify(bbb).replace(/name/g,"label"));
               return ccc
          })
          this.setState({
              user:a
          })
      })
      .catch()
    }

//点击按钮进行添加
    onSubmit = () => {
        this.props.form.validateFields((err, values) =>{
           if (!err) {
            axios.post('/export/saveOrupdate',values)
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
        const {user} =this.state;
        const Item = List.Item;
        return(
            <div>
                <form>
                <List
                    renderHeader={() => <p style={{textAlign:'center',margin:0}}>添加出库</p>}
                >
                    <InputItem
                    {...getFieldProps('productname')}
                    clear
                    placeholder="请输入产品名称"
                    >
                        产品名称
                    </InputItem>
                   
                    <Picker data={user} cols={1} {...getFieldProps('userId')} className="forss" >
                        <List.Item arrow="horizontal">操作人员</List.Item>
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
export default  createForm()(Import);