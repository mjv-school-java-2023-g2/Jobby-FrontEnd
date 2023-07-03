'use client'

import Layout from "./components/layout";
import { Button } from 'antd';

const Home = () => {
  return (
    <div>
      <Layout>
        <div>
          <Button type="primary">Button</Button>
        </div>
      </Layout>
    </div>
  )
}

export default Home;