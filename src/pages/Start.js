import React from 'react';
import '../css/App.css';
import { NavBar,TabBar,Icon } from 'antd-mobile';
//导入路由组件
import {BrowserRouter,Route,Switch,Redirect,withRouter} from "react-router-dom";

//导入路由相关的组件页面
import Repository  from './tabar/Repository'
import Order  from './tabar/Order'
import Set from './tabar/Set'
import Statics  from './tabar/Statics'
import People from './tabar/People';
// import { tsMethodSignature } from '@babel/types';

// 引入点击宫格要跳转的组件
import Product from '../repository/Product'
import Inventory from '../repository/Inventory'
import Category from '../repository/Category';
import Import from '../repository/Import';
import Export from '../repository/Export';
import HisImport from '../repository/HisImport'
import HisExport from '../repository/HisExport'
import About from '../repository/About'

// 引入下边导航栏所需要的组件
import HisBuyOrder from '../order/HisBuyOrder'
import HisSaleOrder from '../order/HisSaleOrder'
import InsertBuyOrder from '../order/InsertBuyOrder'
import InsertSaleOrder from '../order/InsertSaleOrder'
import Customer from '../people/Customer'
import Provider from '../people/Provider'
import  InsertCustomer  from '../people/InsertCustomer'
import  InsertProvider  from '../people/InsertProvider'
import InventoryStatics from '../statics/InventoryStatics'
import PriceStatics from '../statics/PriceStatics'
import AlarmStatics from '../statics/AlarmStatics'



class Start extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
      //  被选中的TaBar.Item的名称
      selectedTab: 'repository',
      hidden: false,
      fullScreen: false,
    };
    
  }

    // // 组件将要被挂载
    // componentWillMount(){
    //     alert(1)
    //   // this.props.history.push('/')
    //   // 作用是进行刷新后还定位到原来的页面
    //   console.log('重新执行了 constructor, APP组件被重新创建了')
    //   // 在构造函数中，如果想访问props，不能直接使用this.props;需要通过constructor的形参来接受并使用
    //   console.log('1111'+this.props)
    //   const arr = this.props.location.pathname.split('/')
    
    //   this.setState({
    //     selectedTab:arr[1]
    //   })
    //   console.log('2222'+this.state.selectedTab)
    // }
    // props的改变会触发这个函数的执行，组件将接受新的props数据，实现后退功能
    // componentWillReceiveProps(nextProps){
    //    const arr =nextProps.history.location.pathname.split('/');
    //    this.setState({
    //     selectedTab:arr[1]
    //    })
    // }

  

  render(){
     return (
       <div className="App">
           
        {/* 头部导航条区域 */}
          <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              // 每当点击左侧的返回的按钮，会触发事件
              // onLeftClick={() => {
              //   // 调用路由提供的历史API，后退一次
              //    this.props.history.go(-1);
              //    //每当点击后退按钮的时候，需要程序员手动的把状态中的selectedTab从新赋值为当前Hash值所对应的TabBar.Item的名称
              //   //  通过一个0秒的定时器，获取到最新的Hash值
              //    setTimeout(()=>{
              //       // 打印url中的hash值
              //     // console.log(window.location.hash)
              //     //按照/分割pathname地址，的到数组 ，把索引为1的这一项就是我们想得到的那个名称
              //     const arr = this.props.location.pathname.split('/')
              //     // this.setState,根据解析出来的名称，设置指定的TaBar.Item的高亮
              //     this.setState({
              //       selectedTab:arr[1]
              //     })
              //     // console.log(arr)
              //    },100)
              // }}
            >超市仓库进存销管理
          </NavBar>
        
        {/* 底部的导航区域 */}
          <TabBar
          // 未选中时文本的背景色
          unselectedTintColor="#949494"
          // 是选中时文本的背景颜色
          tintColor="#33A3F4"
          // 是导航栏背景色
          barTintColor="white"
          // 是否隐藏当前的TabBar
          hidden={this.state.hidden}
        >
          <TabBar.Item
          // 设置当前Item项显示的文字
            title="仓库"
            // icon用于指定未选中时候，当前item项展示的小图标
            // {}代表要写js,里面的{}代表要放一个对象
            icon={{uri:'./icons/仓库黑.png'}}
            // selectedIcon用于指定当前Item项被选中以后要展示的图标
            selectedIcon={{uri:'./icons/仓库.png'}}
            selected={this.state.selectedTab === 'repository'}
            //一般selected选中项都要和onPress事件配合使用 
            //只要点击了当前的Item项，就会触发当前Item项的onPress事件
            onPress={() => {
              this.setState({
                selectedTab: 'repository',
              });
              this.props.history.push('/repository')
            }}
          >
              <BrowserRouter>
              <Switch>
                {/*当用户访问的是/start根路径，那么显示出App.js根组件后，要立即重定向到/repository地址，默认显示repository组件*/}
              <Route exact path="/start" render={()=><Redirect to="/repository"/>} />
              {/* 这个路由加exact的原因是因为Route的匹配原则为模糊匹配，根据 /repository/product哈希值路径，他会把/repository
              路径也匹配到，所以为了实现精准匹配要加exact                    */}
              <Route exact path='/repository' component={Repository}/>
              <Route path='/repository/product' component={Product} />
              <Route path='/repository/inventory' component={Inventory} />
              <Route path='/repository/category' component={Category} />
              <Route path='/repository/import' component={Import} />
              <Route path='/repository/export' component={Export} />
              <Route path='/repository/hisimport' component={HisImport} />
              <Route path='/repository/hisexport' component={HisExport} />
              <Route path='/repository/about' component={About} />
             </Switch>
             </BrowserRouter>
          </TabBar.Item>
          {/* 第二个 */}
          <TabBar.Item
          //  在public里面的内容写路径是不要带public,因为在打包好后的文件中没有public这个目录
            icon={{uri:'./icons/订单黑.png'}}
            selectedIcon={{uri:'./icons/订单.png'}}
            title="订单"
            // selected是一个属性，接受一个bool值，true表示当前Item项应该被高亮选中，false表示不应该被高亮选中
            selected={this.state.selectedTab === 'order'}
            onPress={() => {
              this.setState({
                selectedTab: 'order',
              });
              this.props.history.push('/order')
            }}
          >
          <BrowserRouter>
            <Route  exact path='/order' component={Order}/>
            <Route path='/order/insertbuyorder' component={InsertBuyOrder} />
            <Route path='/order/insertsaleorder' component={InsertSaleOrder} />
            <Route path='/order/hisbuyorder' component={HisBuyOrder} />
            <Route path='/order/hissaleorder' component={HisSaleOrder} />
            </BrowserRouter>
          </TabBar.Item>
          {/* 第三个 */}
          <TabBar.Item
            icon={{uri:'./icons/客户黑.png'}}
            selectedIcon={{uri:'./icons/客户.png'}}
            title="客户"
            
            selected={this.state.selectedTab === 'people'}
            onPress={() => {
              this.setState({
                selectedTab: 'people',
              });
              this.props.history.push('/people')
            }}
          >
             <BrowserRouter>
              <Switch>
            <Route exact  path='/people' component={People}/>
            <Route path='/people/insertcustomer' component={InsertCustomer} />
            <Route path='/people/insertprovider' component={InsertProvider} />
            <Route path='/people/customer' component={Customer} />
            <Route path='/people/provider' component={Provider} />
            </Switch>
            </BrowserRouter>
          </TabBar.Item>
          {/* 第四个 */}
          <TabBar.Item
            icon={{uri:'./icons/统计黑.png'}}
            selectedIcon={{uri:'./icons/统计.png'}}
            title="统计"
            selected={this.state.selectedTab === 'statics'}
            onPress={() => {
              this.setState({
                selectedTab: 'statics',
              });
              this.props.history.push('/statics')
            }}
          >
             <BrowserRouter>
              <Switch>
            <Route exact path='/statics' component={Statics}/>
            <Route  path='/statics/inventorystattics' component={InventoryStatics} />
            <Route  path='/statics/pricestatics' component={PriceStatics} />
            <Route  path='/statics/alarmstatics' component={AlarmStatics} />
            </Switch>
            </BrowserRouter>
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:'./icons/设置黑.png'}}
            selectedIcon={{uri:'./icons/设置.png'}}
            title="设置"
            selected={this.state.selectedTab === 'set'}
            onPress={() => {
              this.setState({
                selectedTab: 'set',
              });
              this.props.history.push('/set')
            }}
          >
            <BrowserRouter>
              <Switch>
           <Route  path='/set' component={Set}/>
           </Switch>
            </BrowserRouter>
          </TabBar.Item>
        </TabBar>
    </div>
  );
}
}

export default withRouter(Start);
