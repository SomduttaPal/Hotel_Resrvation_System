import React from "react";
import Service from "../services/Service";
import { UserHeaderComponent } from "./UserHeaderComponent";

export class ProfileUserComponent extends React.Component {
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
            emailId: token,
            phoneNumber: '',
            aadhar: '',
            password: '',
            loggedIn
        }
        this.editUser = this.editUser.bind(this);
    }

    editUser(emailId) {
        this.props.history.push(`/updateuser/${emailId}`)
    }

    //this.props.match.params.emailId
    componentDidMount() {
        Service.getUserByEmailId(this.state.emailId).then((res) => {
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

    render() {
        if (this.state.loggedIn === false) {
            alert("Login First")
            this.props.history.push("/login");
        }
        // return 
        // <div  class="jumbotron text-center">
        //     <br/><br/>
        //     <h1>Hi</h1>
        //     <br/><br/>
        //     <table className="table">
        //         <tr className="table-active">
        //             <th scope="col">First Name</th>
        //             <th scope="col">Last Name</th>
        //             <th scope="col">EmailId</th>
        //             <th scope="col">PhoneNumber</th>
        //             <th scope="col">Aadhar</th>
        //             <th scope="col">Password</th>
        //             <th scope="col">Action</th>
        //         </tr>
        //         <tbody>
        //         {
        //             <tr key = {this.state.emailId}>
        //                 <td>{this.state.firstName}</td>
        //                 <td>{this.state.lastName}</td>
        //                 <td>{this.state.emailId}</td>
        //                 <td>{this.state.phoneNumber}</td>
        //                 <td>{this.state.aadhar}</td>
        //                 <td>{this.state.password}</td>
        //                 <td><button onClick={() => this.editUser(this.state.emailId)}>Update</button></td>
        //             </tr>
        //         }
        //         </tbody>
        //     </table>
        // </div>
        return <div >
            <UserHeaderComponent />
            <br />
            <div class="container py-5 h-100">
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
                                    <br /><br /><br />
                                    <h6>Profile</h6>
                                    <hr class="mt-0 mb-4"></hr>
                                    <div class="row pt-1">
                                        <div class="col-6 mb-3">
                                            <h6>Email</h6>
                                            <p class="text-muted">{this.state.emailId}</p>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <h6>Phone</h6>
                                            <p class="text-muted">{this.state.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <br />
                                    <h6>KYC Info</h6>
                                    <hr class="mt-0 mb-4"></hr>
                                    <div class="row pt-1">
                                        <div class="col-6 mb-3">
                                            <h6>AAdhar</h6>
                                            <p class="text-muted">{this.state.aadhar}</p>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <h6>Password</h6>
                                            <p class="text-muted">{this.state.password}</p>
                                        </div>
                                    </div>
                                    <br />
                                    <h6>Update Profile</h6>
                                    <hr class="mt-0 mb-4"></hr>
                                    <button className="btn btn-dark" onClick={() => this.editUser(this.state.emailId)}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}