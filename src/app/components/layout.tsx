import PageHeader from "./header/page";
import Sidebar from "./sidebar/page";
import Footer from "./footer/page";
import { Col, Row } from 'antd';

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <PageHeader/>
            <Row>
                <Col flex="none">
                    <Sidebar/>
                </Col>
                <Col flex="auto">
                    <section>
                        {children}
                    </section>
                </Col>
            </Row> 
            <Footer/>
        </>
    );
};

export default Layout;

