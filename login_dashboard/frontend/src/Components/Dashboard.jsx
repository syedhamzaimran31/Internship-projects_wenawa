import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Card,
  Button,
  Row,
  Col,
  Steps,
} from "antd";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `Tab ${key}`,
}));
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User data ", "1", <PieChartOutlined />),
  getItem("Order Details ", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Hamza</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Product 1" bordered={false}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem id neque est qui vel non magnam error
                    reiciendis, omnis ipsam nostrum unde rem quidem temporibus,
                    odio atque eius sunt aspernatur.1
                  </p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Product 2" bordered={false}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt quasi sed suscipit. Quo nemo quis reprehenderit, minima
                    expedita earum vero harum blanditiis quidem aliquid vel sunt
                    eaque, aliquam voluptas illum?
                  </p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Product 3" bordered={false}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae in magnam explicabo aspernatur quia dicta dolorem
                    provident, dignissimos maiores, reiciendis dolorum possimus
                    veniam perferendis sint asperiores sequi deleniti earum
                    animi.
                  </p>
                </Card>
              </Col>
            </Row>
            <div style={{ marginTop: 16 }}>
              <Button type="primary">Order Deliverd</Button>
              <Button style={{ marginLeft: 8 }}>Order Failed</Button>
            </div>
            <Steps
              style={{ marginTop: 36, marginRight: 20 }}
              items={[
                {
                  title: "Login",
                  status: "finish",
                  icon: <UserOutlined />,
                },
                {
                  title: "Verification",
                  status: "finish",
                  icon: <SolutionOutlined />,
                },
                {
                  title: "Pay",
                  status: "process",
                  icon: <LoadingOutlined />,
                },
                {
                  title: "Done",
                  status: "wait",
                  icon: <SmileOutlined />,
                },
              ]}
            />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} WENAWA
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
