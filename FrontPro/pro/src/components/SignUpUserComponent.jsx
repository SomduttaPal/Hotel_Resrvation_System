import React from "react";
import Service from "../services/Service";
import { NavBarComponent } from "./NavBarComponent";

export class SignUpUserComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: '-1',
            lastName: '-1',
            emailId: '-1',
            phoneNumber: '-1',
            aadhar: '-1',
            password: '-1'
        }
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
        if (this.state.emailId != '-1' && this.state.firstName != '-1' && this.state.lastName != '-1' && this.state.aadhar != '-1' && this.state.phoneNumber != '-1' && this.state.password != '-1') {
            let user = {
                firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,
                phoneNumber: this.state.phoneNumber, aadhar: this.state.aadhar, password: this.state.password
            };
            console.log(JSON.stringify(user));
            Service.createUsers(user).then(res => {
                this.props.history.push("/login");
            });
        }
        else {
            alert("Please Enter Valid Data")
        }
    }

    render() {
        return <div>
            <NavBarComponent />
            <div class="jumbotron text-center">
                <br />
                <h1>Sign Up</h1>
                <div className="row d-flex py-5 justify-content-center align-items-center">
                    <div className="card mb-3 col-xl-5">
                        <img src="\images\room1.jpg"></img>
                    </div>
                    <div className="card col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <br />
                        <form>
                            <input className="btn-default btn-lg" placeholder="Firstname" name="firstname" onChange={this.changeFirstName.bind(this)} required></input> <br /><br />
                            <input className="btn-default btn-lg" placeholder="Lastname" name="lastname" onChange={this.changeLastName.bind(this)} required></input> <br /><br />
                            <input className="btn-default btn-lg" placeholder="EmailId" name="emailid" onChange={this.changeEmailId.bind(this)} required></input> <br /><br />
                            <input className="btn-default btn-lg" placeholder="Phone Number" name="phonenumber" onChange={this.changePhone.bind(this)} required></input> <br /><br />
                            <input className="btn-default btn-lg" placeholder="Aadhar" name="aadhar" onChange={this.changeAadhar.bind(this)} required></input> <br /><br />
                            <input type="password" className="btn-default btn-lg" placeholder="Password" name="password" onChange={this.changePassword.bind(this)}></input> <br /><br />
                            <button className="btn-dark btn-lg" onClick={this.saveUser.bind(this)}>Save</button>
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        </div>

    }
}