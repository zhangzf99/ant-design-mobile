import React from 'react'
import { List } from 'antd-mobile';



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

   componentWillMount(){
       alert(1)
   }

  
    app=()=>{
        
        this.props.history.push('/start')
        console.log(this.props.history)
    }
    


    render(){
        const Item = List.Item;
        return(
            <List renderHeader={() =><p style={{textAlign:'center',margin:0}}>登录</p>}>
            <Item extra="查看" thumb="./icons/客户.png" arrow="horizontal"  onClick={() =>this.app()}>登录</Item>
            </List>
        )
    }
}
export default Login;