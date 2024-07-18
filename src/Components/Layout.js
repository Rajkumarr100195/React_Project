
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Footer from './Footer'
import SideBar from './Sidebar'
import Visitor from './Visitor'

function Layout(props) {


  return (
    <div>
    <Header />
    {props.children}
    <div style={main.container}>
    <SideBar />
    <Visitor/>
    </div>
    <Footer />
    </div>
  );
}

export default Layout;

const main = {
  container: {
display:'flex',
padding:"0px 10px"

  },
 
};