import React from "react";
import Service from "../services/Service";
import { NavBarComponent } from "./NavBarComponent";
export class LoginForm extends React.Component{

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: '',
            password: '',
            dbemailId: '',
            dbpassword: '',
            loggedIn
        }
    }

    changeEmailId = (event) => {
        this.setState({emailId: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
        Service.getUserByEmailId(this.state.emailId).then((res)=>{
            let user = res.data;
            this.setState({dbemailId:user.emailId, 
                dbpassword:user.password});
        })
    }

    checkValid() { 
        if(this.state.password == this.state.dbpassword) {
            localStorage.setItem("token",this.state.emailId)
            this.setState({loggedIn:true})
            console.log("password"+this.state.dbpassword);
            this.props.history.push(`/homeuser/${this.state.emailId}`);
        }
        else {
            alert("Wrong");
        }
    }

    render() {
        if(this.state.loggedIn) {
            const token = localStorage.getItem("token")
            this.props.history.push(`/homeuser/${token}`);
        }
        // return <div  class="jumbotron text-center">
        //     <br/><br/>
        //     <h1>Login</h1>
        //     <form>
        //     <br/><br/>
        //         <input className="btn-default btn-lg" placeholder="EmailId" name="emailid" onChange={this.changeEmailId.bind(this)}></input> <br/><br/>
        //         <input type="password" className="btn-default btn-lg" placeholder="Password" name="password" onChange={this.changePassword.bind(this)}></input> <br/><br/>
        //         <button className="btn-dark btn-lg" onClick={this.checkValid.bind(this)}>Login</button>
        //     </form>
        // </div> 
        return <div>
            <NavBarComponent/>
            <br/><br/>
            <h3 class="jumbotron text-center">Thanks For Joining Us !!!</h3>
            <br/>
            <div className="row d-flex justify-content-center align-items-center">
            <div className="card mb-3 col-xl-5">
                <img src="\images\room1.jpg"></img>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>    
                    <div className="align-items-center my-4">
                        <p className="text-center fw-bold mx-3">--- Login ---</p>
                    </div>
                    <div className="mb-4">
                        <input type="email" className="form-control form-control-lg"
                        placeholder="Email Id" onChange={this.changeEmailId.bind(this)}/>
                    </div>
                    <div className="mb-3">
                        <input type="password"className="form-control form-control-lg"
                        placeholder="Password" onChange={this.changePassword.bind(this)}/>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                        <button className="btn-dark btn-lg" onClick={this.checkValid.bind(this)}>Login</button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/adduser"
                            className="link-danger">Register</a></p>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Cancle Login? <a href="/"
                            className="link-danger">Canlce</a></p>
                    </div>
                </form>
                <br/><br/>
            </div>
        </div>
        </div>
    }
}