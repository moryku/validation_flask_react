import {Form, Icon, Input, Button, Radio} from 'antd';
import React from "react";
import {Row, Col} from 'antd';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const FORM_LOGIN = 1
const FORM_REGISTER = 2

class HomeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typeForm: FORM_LOGIN,
            showLoginForm: true
        }
    }


    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleFormLayoutChange = e => {
        this.setState({
            typeForm: e.target.value,
            showLoginForm: e.target.value == FORM_LOGIN ? true : false
        })
    }


    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Row>
                <Col span={8} offset={8}>
                    <Form layout="vertical" onSubmit={this.handleSubmit}>
                        <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
                            <Radio.Button value={FORM_LOGIN}>Signin</Radio.Button>
                            <Radio.Button value={FORM_REGISTER}>Register</Radio.Button>
                        </Radio.Group>
                        <br/><br/>
                        {this.state.showLoginForm ? <LoginForm/> : <RegisterForm/>}
                    </Form>
                </Col>
            </Row>
        );
    }
}

HomeForm = Form.create()(HomeForm);
export {HomeForm as default};  // imported as SomeComponent