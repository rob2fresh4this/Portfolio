import React from 'react';
import '../index.css';
import logo from '../Images/image.png'
import {  Layout, Menu, Image } from 'antd';
import './NavBar.css'

const { Header } = Layout;

interface NavBarProps {
  onClick(pageNum: number): void;
}

const NavBar: React.FC<NavBarProps> = ({onClick}) => {

  
  const items = [
    {key: 1, label: "Home"},
    {key: 2, label: "Growth & Core Skills"},
    {key: 3, label: "Career Explorations"},
    {key: 4, label: "Work/Volunteer Experience"},
  ]

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <Image 
            width={150}
            height={50}
            src={logo}
            preview={false}
            
          />
        </div>
        <Menu
          onClick={({ key }) => {onClick(parseInt(key))}}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0, }}
          className='font'
        />
        <h1 className='gapRight font'>Robert Grijalva</h1>
      </Header>
    </Layout>
  );
};

export default NavBar;