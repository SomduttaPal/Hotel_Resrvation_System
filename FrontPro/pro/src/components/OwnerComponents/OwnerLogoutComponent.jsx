import React from "react";

export class OwnerLogoutComponent extends React.Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token2")
        this.props.history.push("/loginowner");
    }
    render() {
        return <div></div>
    }
}