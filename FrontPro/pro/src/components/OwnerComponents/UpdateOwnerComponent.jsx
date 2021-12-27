import React from "react";
import Service from "../../services/Service";
import { OwnerHeaderComponent } from "./OwnerHeaderComponent";

export class UpdateOwnerComponent extends React.Component{

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token2")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            hotelId: '',
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

    componentDidMount(){
        Service.getOwnerByEmailId(this.state.emailId).then((res)=>{
            let owner = res.data;
            this.setState({hotelId:owner.hotelId,
                    hotelName:owner.hotelName,
                    ownerName:owner.ownerName,
                    address:owner.address,
                    city:owner.city,
                    phoneNumber:owner.phoneNumber,
                    password:owner.password
            });
        });
    }

    changeHotelName = (event) => {
        this.setState({hotelName: event.target.value})
    }

    changeOwnerName = (event) => {
        this.setState({ownerName: event.target.value})
    }

    changeAddress = (event) => {
        this.setState({address: event.target.value})
    }

    changeCity = (event) => {
        this.setState({city: event.target.value})
    }

    changePhoneNumber = (event) => {
        this.setState({phoneNumber: event.target.value})
    }

    changeEmailId = (event) => {
        this.setState({emailId: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    saveOwner = (e) => {
        e.preventDefault();
        let owner = {hotelName:this.state.hotelName, ownerName:this.state.ownerName, address:this.state.address, 
        city:this.state.city, phoneNumber:this.state.phoneNumber, emailId:this.state.emailId, password:this.state.password};
        console.log(JSON.stringify(owner));
        Service.ownerUpdate(owner, this.state.hotelId).then(res => {
            this.props.history.push("/homeowner");
        });
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/loginowner");
        }
        // return <div class="jumbotron text-center">
        //     <br/><br/><br/>
        //     <h1>Sign Up</h1>
        //     <br/><br/><br/>
        //     <form>
        //         <input className="btn-default btn-lg" placeholder="hotelName" name="hotelName" value={this.state.hotelName} onChange={this.changeHotelName.bind(this)}></input> <br/><br/>
        //         <input className="btn-default btn-lg" placeholder="ownerName" name="ownerName" value={this.state.ownerName} onChange={this.changeOwnerName.bind(this)}></input> <br/><br/>
        //         <input className="btn-default btn-lg" placeholder="address" name="address" value={this.state.address} onChange={this.changeAddress.bind(this)}></input> <br/><br/>
        //         <input className="btn-default btn-lg" placeholder="city" name="city" value={this.state.city} onChange={this.changeCity.bind(this)}></input> <br/><br/>
        //         <input className="btn-default btn-lg" placeholder="Phone Number" name="phonenumber" value={this.state.phoneNumber} onChange={this.changePhoneNumber.bind(this)}></input> <br/><br/>
        //         <input className="btn-default btn-lg" placeholder="EmailId" name="emailid" value={this.state.emailId} onChange={this.changeEmailId.bind(this)}></input> <br/><br/>
        //         <input type="password" className="btn-default btn-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)}></input> <br/><br/>
        //         <button className="btn-dark btn-lg" onClick={this.saveOwner.bind(this)}>Save</button>
        //     </form>
        // </div>
        return <div >
            <OwnerHeaderComponent/>
            <div class="container py-3 h-100">
            <h4>Update Profile</h4>
            <div class="col mb-lg-0">
            <div class="card mb-3">
            <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center">
                <img
                     src="https://bootdey.com/img/Content/avatar/avatar7.png"
                     className="rounded-circle img-fluid my-5"
                />
                <h5>{this.state.hotelName}</h5>
                </div>
            <div class="col-md-8">
            <div class="card-body p-4">
                <div class="gradient-custom text-center">
                <form>
                    <input className="btn-default btn-lg" placeholder="hotelName" name="hotelName" value={this.state.hotelName} onChange={this.changeHotelName.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="ownerName" name="ownerName" value={this.state.ownerName} onChange={this.changeOwnerName.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="address" name="address" value={this.state.address} onChange={this.changeAddress.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="city" name="city" value={this.state.city} onChange={this.changeCity.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="Phone Number" name="phonenumber" value={this.state.phoneNumber} onChange={this.changePhoneNumber.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="EmailId" name="emailid" value={this.state.emailId} onChange={this.changeEmailId.bind(this)}></input> <br/><br/>
                    <input type="password" className="btn-default btn-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)}></input> <br/><br/>
                    <button className="btn-dark btn-lg" onClick={this.saveOwner.bind(this)}>Save</button>
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    }
}