import React from 'react';
import '../index.css';
import logo from '../Images/image.png'
import {  Layout, Menu, Image } from 'antd';

const { Header } = Layout;

interface NavBarProps {
  onClick(pageNum: number): void;
}

const NavBar: React.FC<NavBarProps> = ({onClick}) => {

  const items = [
    {key: 1, label: "nav1", onclick: {function(){onClick(1)}}},
    {key: 2, label: "item2", onclick: {function(){onClick(2)}}},
    {key: 3, label: "item3", onclick: {function(){onClick(3)}}},
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
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    </Layout>
  );
};

export default NavBar;