import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const PageHeader: React.FC = () => {
  
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
    </Layout>
  );
};

export default PageHeader;