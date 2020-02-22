import React from 'react';
import Layout from '../../components/Layout';

import {
  Card,
  Form,
  Input,
  Row,
  Col,
  Typography
} from 'antd';

import { 
  Button, 
  formItemLayout, 
  tailFormItemLayout
} from '../../components/UI';

const { Title } = Typography;

const Login = (props) => {

  const { form } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <Layout title="Login">
      <Row className="p-60">
        <Col xs={24} sm={{span: 12, offset: 6}}>
          <Card>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
              <Form.Item {...tailFormItemLayout}>
                <Title level={3}>Login</Title>
              </Form.Item>
              <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(<Input size="large"/>)}
              </Form.Item>
              <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    }
                  ],
                })(<Input.Password  size="large"/>)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">
                Login
              </Button>
            </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Form.create({ name: 'Login' })(Login);