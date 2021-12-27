import React from "react";
import { NavBarComponent } from "./NavBarComponent";

export class HomeComponent extends React.Component {

    signupUser() {
        this.props.history.push("/adduser");
    }

    loginUser() {
        this.props.history.push("/login");
    }

    signupOwner() {
        this.props.history.push("/addowner");
    }

    loginOwner() {
        this.props.history.push("/loginowner");
    }

    render() {
        return <div>
            <NavBarComponent/>
        <div className="py-5">
            <div className="row d-flex py-5 justify-content-center align-items-center">
            <div className="card mb-3 col-xl-5">
                <img src="\images\room1.jpg"></img>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <h1>Welcome To StayNest</h1> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn-dark btn-lg" onClick={this.signupUser.bind(this)}>Signup User</button>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn-dark btn-lg" onClick={this.loginUser.bind(this)}>Login User</button> <br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn-dark btn-lg" onClick={this.signupOwner.bind(this)}>Signup Owner</button>      &nbsp;&nbsp;&nbsp;
                <button className="btn-dark btn-lg" onClick={this.loginOwner.bind(this)}>Login Owner</button>
            </div>
        </div>
        </div>
        </div>
    }
}