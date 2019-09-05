import React from 'react'
import { Carousel, WingBlank,Grid } from 'antd-mobile';

class Repository extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // 轮播图的数据
            data: ['1', '2', '3','4'],
            imgHeight: 176,
            // 九宫格的数据
            gridlist:[{
                icon: './九宫格/货品.png',
                text: `商品总览`,
                // 自定义一个新属性path,点击Gridg格子的时候要跳转去的路径
                path:'/repository/product'
            },{
                icon: './九宫格/库存.png',
                text: `库存总览`,
                path:'/repository/inventory'
            },{
                icon: './九宫格/类型.png',
                text: `商品类型`,
                path:'/repository/category'
            },{
                icon: './九宫格/入库.png',
                text: `新增入库`,
                path:'/repository/import'
            },{
                icon: './九宫格/出库.png',
                text: `新增出库`,
                path:'/repository/export'
            },{
                icon: './九宫格/历史.png',
                text: `历史入库`,
                path:'/repository/hisimport'
            },{
                icon: './九宫格/历史.png',
                text: `历史出库`,
                path:'/repository/hisexport'
            },{
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
                text: `888`,
            },{
                icon: './九宫格/关于.png',
                text: `关于仓库`,
                path:'/repository/about'
            },]
        }
    }
   
    //点击跳转到子菜单
    goOtherMenu=(el,index)=>{
        console.log(el)
    //直接跳转到el中的path路径
      this.props.history.push(el.path);
    }

   





    render(){
        return(
        <div>
            {/* 轮播图 */}
          <WingBlank>
                <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a key={val} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }} >
                    <img
                        src={`https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1566959513&di=9463c8cdfbbe3a69a41ae8e7d21432d7&src=http://5b0988e595225.cdn.sohucs.com/images/20181225/8552dc867c224f079ab2a3dbc9bf0816.jpeg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
            </WingBlank>
            <div className='grid'>
            {/* 六宫格区域 */}
             {/* data指定了要渲染的数据，columNum制定了没一行显示几个格子 */}
             {/* onClick为点击时要触发的事件，跳到另外一个页面 */}
            <Grid data={this.state.gridlist} columnNum={3} hasLine={false}  onClick={(el,index)=>this.goOtherMenu(el,index)}/>
            </div>
       </div>
        )
    }

}
export default Repository;
 