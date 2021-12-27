import React from "react";
import Service from "../services/Service";
import { NavBarComponent } from "./NavBarComponent";

export class SignUpUserComponent extends React.Component{

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNumber: '',
            aadhar: '',
            password: ''
        }
    }

    changeFirstName = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastName = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailId = (event) => {
        this.setState({emailId: event.target.value})
    }

    changePhone = (event) => {
        this.setState({phoneNumber: event.target.value})
    }

    changeAadhar = (event) => {
        this.setState({aadhar: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    saveUser = (e) => {
        e.preventDefault();
        let user = {firstName:this.state.firstName, lastName:this.state.lastName, emailId:this.state.emailId, 
        phoneNumber:this.state.phoneNumber, aadhar:this.state.aadhar, password:this.state.password};
        console.log(JSON.stringify(user));
        Service.createUsers(user).then(res => {
            this.props.history.push("/login");
        });
    }

    render() {
        return <div>
            <NavBarComponent/>
        <div class="jumbotron text-center">
            <br/>
            <h1>Sign Up</h1>
            <div className="row d-flex py-5 justify-content-center align-items-center">
                <div className="card mb-3 col-xl-5">
                    <img src="\images\room1.jpg"></img>
                </div>
                <div className="card col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <br/>
                    <form>
                        <input className="btn-default btn-lg" placeholder="Firstname" name="firstname" value={this.state.firstName} onChange={this.changeFirstName.bind(this)}></input> <br/><br/>
                        <input className="btn-default btn-lg" placeholder="Lastname" name="lastname" value={this.state.lastName} onChange={this.changeLastName.bind(this)}></input> <br/><br/>
                        <input className="btn-default btn-lg" placeholder="EmailId" name="emailid" value={this.state.emailId} onChange={this.changeEmailId.bind(this)}></input> <br/><br/>
                        <input className="btn-default btn-lg" placeholder="Phone Number" name="phonenumber" value={this.state.phoneNumber} onChange={this.changePhone.bind(this)}></input> <br/><br/>
                        <input className="btn-default btn-lg" placeholder="Aadhar" name="aadhar" value={this.state.aadhar} onChange={this.changeAadhar.bind(this)}></input> <br/><br/>
                        <input type="password" className="btn-default btn-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)}></input> <br/><br/>
                        <button className="btn-dark btn-lg" onClick={this.saveUser.bind(this)}>Save</button>
                    </form>
                    <br/>
                </div>
            </div>
        </div>
        </div>

    }
}