import React from "react";
import Service from "../../services/Service";
import { NavBarComponent } from "../NavBarComponent";

export class SignUpOwnerComponent extends React.Component{

    constructor() {
        super()
        this.state = {
            hotelName: '',
            ownerName: '',
            address: '',
            city:'',
            phoneNumber: '',
            emailId: '',
            password: ''
        }
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
        Service.createOwner(owner).then(res => {
            this.props.history.push("/loginowner");
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
                    <input className="btn-default btn-lg" placeholder="hotelName" name="hotelName" value={this.state.hotelName} onChange={this.changeHotelName.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="ownerName" name="ownerName" value={this.state.ownerName} onChange={this.changeOwnerName.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="address" name="address" value={this.state.address} onChange={this.changeAddress.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="city" name="city" value={this.state.city} onChange={this.changeCity.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="Phone Number" name="phonenumber" value={this.state.phoneNumber} onChange={this.changePhoneNumber.bind(this)}></input> <br/><br/>
                    <input className="btn-default btn-lg" placeholder="EmailId" name="emailid" value={this.state.emailId} onChange={this.changeEmailId.bind(this)}></input> <br/><br/>
                    <input type="password" className="btn-default btn-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)}></input> <br/><br/>
                    <button className="btn-dark btn-lg" onClick={this.saveOwner.bind(this)}>Save</button>
                    </form>
                    <br/>
                </div>
            </div>
        </div>
        </div>
    }
}