import React from "react";
import Service from "../services/Service";
import { UserHeaderComponent } from "./UserHeaderComponent";

export class UpdateUserComponent extends React.Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNumber: '',
            aadhar: '',
            password: '',
            loggedIn
        }
    }

    componentDidMount() {
        Service.getUserByEmailId(this.props.match.params.emailId).then((res) => {
            let user = res.data;
            console.log(user);
            this.setState({
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId,
                phoneNumber: user.phoneNumber,
                aadhar: user.aadhar,
                password: user.password
            });
        });
    }

    changeFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }

    changeLastName = (event) => {
        this.setState({ lastName: event.target.value })
    }

    changeEmailId = (event) => {
        this.setState({ emailId: event.target.value })
    }

    changePhone = (event) => {
        this.setState({ phoneNumber: event.target.value })
    }

    changeAadhar = (event) => {
        this.setState({ aadhar: event.target.value })
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,
            phoneNumber: this.state.phoneNumber, aadhar: this.state.aadhar, password: this.state.password
        };
        console.log(JSON.stringify(user));
        Service.updateUser(user, this.state.emailId).then(res => {
            this.props.history.push("/profileuser")
        });
    }

    render() {
        if (this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div >
            <UserHeaderComponent />
            <div class="container py-5 h-100">
                <h1>Update Profile</h1>
                <div class="col mb-lg-0">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4 gradient-custom text-center">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    className="rounded-circle img-fluid my-5"
                                />
                                <h5>{this.state.firstName} {this.state.lastName}</h5>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body p-4">
                                    <div class="gradient-custom text-center">
                                        <form>
                                            <input className="btn-default btn-lg" placeholder="Firstname" name="firstname" value={this.state.firstName} onChange={this.changeFirstName.bind(this)}></input> <br /><br />
                                            <input className="btn-default btn-lg" placeholder="Lastname" name="lastname" value={this.state.lastName} onChange={this.changeLastName.bind(this)}></input> <br /><br />
                                            <input className="btn-default btn-lg" placeholder="EmailId" name="emailid" value={this.state.emailId} onChange={this.changeEmailId.bind(this)}></input> <br /><br />
                                            <input className="btn-default btn-lg" placeholder="Phone Number" name="phonenumber" value={this.state.phoneNumber} onChange={this.changePhone.bind(this)}></input> <br /><br />
                                            <input className="btn-default btn-lg" placeholder="Aadhar" name="aadhar" value={this.state.aadhar} onChange={this.changeAadhar.bind(this)}></input> <br /><br />
                                            <input type="password" className="btn-default btn-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)}></input> <br /><br />
                                            <button className="btn-dark btn-lg" onClick={this.saveUser.bind(this)}>Save</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}