import React from 'react';
import Layout from '../../components/Layout';

import {
  Card,
  Form,
  Input,
  Tooltip,
  Icon,
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

const SignUp = (props) => {

  const { form } = props;
  const { getFieldDecorator } = form;


  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  // const validateToNextPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <Layout title="SignUp">
      <Row className="p-60">
        <Col xs={24} sm={{span: 12, offset: 6}}>
          <Card>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
              <Form.Item {...tailFormItemLayout}>
                <Title level={3}>Sign Up for free</Title>
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Name&nbsp;
                    <Tooltip title="What do you want others to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                })(<Input size="large"/>)}
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
              <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                })(<Input.Password size="large"/>)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">
                Sign up
              </Button>
            </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Form.create({ name: 'SignUp' })(SignUp);