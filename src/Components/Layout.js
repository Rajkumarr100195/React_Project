
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Footer from './Footer'
import SideBar from './Sidebar'

function Layout(props) {


  return (
    <div>
    <Header />
   
    {props.children}
    <SideBar />
    <Footer />
    </div>
  );
}

export default Layout;

