import React from "react";

export class UserHeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            loggedIn
        }
    }

    render() {
        if (this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                    <img src=".jpg" width="30" height="30" class="d-inline-block align-top" />
                    StayNest
                </a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href={"/homeuser/" + this.state.emailId}>Home</a>
                        <a class="nav-item nav-link" href="/aboutus">About Us</a>
                        <a class="nav-item nav-link" href="/contactus">Contact Us</a>
                        <a class="nav-item nav-link" href="/logout">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    }
}