import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import AboutContent from './component/AboutContent';
import HomeContent from './component/HomeContent';
import ContactPage from './component/ContactContent';
import Add from './component/componentForHomeContent/Add';
import Delete from './component/componentForHomeContent/Delete';
//import axios from 'axios';
//import {Link} from 'react-router-dom'

class App extends Component
{
  
  constructor(props)
  {
    super(props);
    this.state = {
      homePage : false,
      aboutPage : false,
      contactPage : false,
      addPage:false,
      deletePage:false
    };
  }



  openHomePage = ()=>{
      this.setState({
        homePage : true,
        aboutPage :false,
        contactPage :false,
        addPage:false,
        deletePage:false 
      })
  }

  openAboutPage = ()=>{
    this.setState({
      homePage :false,
      aboutPage : true,
      contactPage :false,
      addPage:false,
      deletePage:false
    })
  }

  openContactPage = ()=>{
    this.setState({
      homePage :false,
      aboutPage : false,
      contactPage :true,
      addPage:false,
      deletePage:false
    })
  }

  openAddPage = ()=>{
    this.setState({
      homePage :false,
      aboutPage : false,
      contactPage :false,
      addPage:true,
      deletePage:false
    })
  }

  openDeletePage = ()=>{
    this.setState({
      homePage :false,
      aboutPage : false,
      contactPage :false,
      addPage:false,
      deletePage:true
    })
  }

  render()
  {
    let renderComponent = <HomeContent/>;

    if(this.state.homePage)
    {
      renderComponent = <HomeContent/>;
    }
    if(this.state.aboutPage)
    {
      renderComponent = <AboutContent/>;
    }
    if(this.state.contactPage)
    {
      renderComponent = <ContactPage/>
    }
    if(this.state.addPage)
    {
      renderComponent = <Add/>
    }
    if(this.state.deletePage)
    {
      renderComponent =<Delete/>
    }
    const { Header, Content, Footer } = Layout;
    return(
      <div>
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1" onClick={this.openHomePage}>Home</Menu.Item>
                <Menu.Item key="2" onClick={this.openAboutPage}>About</Menu.Item>
                <Menu.Item key="3" onClick={this.openContactPage}>Contact</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              
              <Breadcrumb style={{ margin: '16px 0' }}>
                
                <Breadcrumb.Item href="#" onClick={this.openHomePage}>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#" onClick={this.openAddPage}>Add</Breadcrumb.Item>
                <Breadcrumb.Item href="#" onClick={this.openDelete}>Delete</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 800}}>
                {renderComponent}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>PG Memory Design ©2019 Created by PG Company</Footer>
        </Layout>
      </div>
    )
  }
}


export default App;
