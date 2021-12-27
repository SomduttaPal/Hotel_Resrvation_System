import React from "react";

export class UserLogoutComponent extends React.Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        this.props.history.push("/login");
    }
    render() {
        return <div></div>
    }
}