import React from "react";
import Service from "../../services/Service";
import { OwnerHeaderComponent } from "./OwnerHeaderComponent";

export class ProfileOwnerComponent extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token2")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            hotelName: '',
            ownerName: '',
            address: '',
            city:'',
            phoneNumber: '',
            emailId: token,
            password: '',
            loggedIn
        }
    }

    editOwner() {
        this.props.history.push('/updateowner')
    }

    componentDidMount(){
        Service.getOwnerByEmailId(this.state.emailId).then((res)=>{
            let owner = res.data;
            this.setState({hotelName:owner.hotelName,
                    ownerName:owner.ownerName,
                    address:owner.address,
                    city:owner.city,
                    phoneNumber:owner.phoneNumber,
                    password:owner.password
            });
        });
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/loginowner");
        }
        // return <div  class="jumbotron text-center">
        //     <br/><br/>
        //     <h1>Hi</h1>
        //     <br/><br/>
        //     <table className="table">
        //         <tr className="table-active">
        //             <th scope="col">Hotel Name</th>
        //             <th scope="col">Hotel Owner Name</th>
        //             <th scope="col">Address</th>
        //             <th scope="col">City</th>
        //             <th scope="col">EmailId</th>
        //             <th scope="col">PhoneNumber</th>
        //             <th scope="col">Password</th>
        //             <th scope="col">Action</th>
        //         </tr>
        //         <tbody>
        //         {
        //             <tr key = {this.state.emailId}>
        //                 <td>{this.state.hotelName}</td>
        //                 <td>{this.state.ownerName}</td>
        //                 <td>{this.state.address}</td>
        //                 <td>{this.state.city}</td>
        //                 <td>{this.state.emailId}</td>
        //                 <td>{this.state.phoneNumber}</td>
        //                 <td>{this.state.password}</td>
        //                 <td><button onClick={this.editOwner.bind(this)}>Update</button></td>
        //             </tr>
        //         }
        //         </tbody>
        //     </table>
        // </div>
        return <div >
        <OwnerHeaderComponent/>
   <div class="container py-5 h-100">
       <div class="col mb-lg-0">
           <div class="card mb-3">
           <div class="row g-0">
               <div class="col-md-4 gradient-custom text-center">
               <img
                   src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    className="rounded-circle img-fluid my-5"
               />
               <h5>{this.state.ownerName}</h5>
               </div>
           <div class="col-md-8">
           <div class="card-body p-4">
               <h6>Hotel Information</h6>
               <hr class="mt-0 mb-4"></hr>
               <div class="row pt-1">
                   <div class="col-6 mb-3">
                       <h6>Name</h6>
                       <p class="text-muted">{this.state.hotelName}</p>
                   </div>
                   <div class="col-6 mb-3">
                       <h6>Address</h6>
                       <p class="text-muted">{this.state.address}</p>
                   </div>
                   <div class="col-6 mb-3">
                       <h6>City</h6>
                       <p class="text-muted">{this.state.city}</p>
                   </div>
                   <div class="col-6 mb-3">
                       <h6>Phone Number</h6>
                       <p class="text-muted">{this.state.phoneNumber}</p>
                   </div>
                   <div class="col-6 mb-3">
                       <h6>EmailId</h6>
                       <p class="text-muted">{this.state.emailId}</p>
                   </div>
                   <div class="col-6 mb-3">
                       <h6>Password</h6>
                       <p class="text-muted">{this.state.password}</p>
                   </div>
               </div>
               <h6>Update Profile</h6>
               <hr class="mt-0 mb-4"></hr>
               <button className="btn btn-dark" onClick={this.editOwner.bind(this)}>Update</button>
           </div>
           </div>
           </div>
       </div>
       </div>
       </div>
   </div>
    }
}