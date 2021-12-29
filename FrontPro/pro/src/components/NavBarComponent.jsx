import React from "react";

export class NavBarComponent extends React.Component {
    render() {
        return <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                    <img src=".jpg" width="30" height="30" class="d-inline-block align-top" />
                    StayNest
                </a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/">Home</a>
                        <a class="nav-item nav-link" href="/aboutus">About Us</a>
                        <a class="nav-item nav-link" href="/contactus">Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    }
}