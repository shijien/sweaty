import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            fname: "",
            lname: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        return this.props.processForm(user);
    }

    update(field) {
        return e => (
            this.setState({
                [field]: e.currentTarget.value
            })
        );
    }
    
    render() {
        if (this.props.formType === "LOG IN") {
            return (
                <div id='div-form'>
                    <form onSubmit={this.handleSubmit} id="login-form">
                        <label id="email">
                            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
                        </label>
                        <label id="password">
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                        </label>
                        <label id="submit">
                            <input type="submit" value={this.props.formType} />
                        </label>
                    </form>

                </div>
            )
            
        } else {
            return (
                <div id='div-form'>
                    <form onSubmit={this.handleSubmit} id="signup-form">
                        <label id="usename">
                            <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="User name" />
                        </label>
                        <label id="fname">
                            <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder="First name" />
                        </label>
                        <label id="lname">
                            <input type="text" value={this.state.lname} onChange={this.update('lname')} placeholder="Last name" />
                        </label>
                        <label id="email">
                            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
                        </label>
                        <label id="password">
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                        </label>
                        <label id="submit">
                            <input type="submit" value={this.props.formType} />
                        </label>
                    </form>

                </div>
            );
        }
    }
}

export default withRouter(SessionForm);