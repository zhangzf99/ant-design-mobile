// 这是九宫格中的新增入库
import React from 'react'
import { List, InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from '../http/axios';



class InsertProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentWillMount(){
       
    }



//点击按钮进行添加
    onSubmit = () => {
        this.props.form.validateFields((err, values) =>{
           if (!err) {
            axios.post('/provider/saveOrupdate',values)
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
        const Item = List.Item;
        return(
            <div>
                <form>
                <List
                    renderHeader={() => <p style={{textAlign:'center',margin:0}}>添加顾客</p>}
                >
                    <InputItem
                    {...getFieldProps('name')}
                    clear
                    placeholder="请输入供应商姓名"
                    >
                      姓名
                    </InputItem>
                    
                    <InputItem
                    {...getFieldProps('telephone')}
                    clear
                    placeholder="请输入供应商电话"
                    >
                       电话
                    </InputItem>
                   
                    <InputItem
                    {...getFieldProps('address')}
                    clear
                    placeholder="请输入供应商地址"
                    >
                       地址
                    </InputItem>

                    <Item>
                    <Button type="primary" size="small" inline onClick={this.onSubmit}>提交</Button>
                    </Item>
                </List>
                </form>
          </div>
        )
    }
}
export default  createForm()(InsertProvider);