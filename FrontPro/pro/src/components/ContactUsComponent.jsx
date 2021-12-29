import React, { useState } from "react";
import { NavBarComponent } from "./NavBarComponent";

export class ContactUsComponent extends React.Component {
    render() {
        return <div>
            <NavBarComponent/>
            <div className="my-4">
                <h2 className="text-center">Contact Us</h2>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label class="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="fullname"
                                    placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone No
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="phone"
                                    placeholder="Valid Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </label>
                                <textarea
                                    class="form-control"
                                    name="message"
                                    rows="3">
                                </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    }
}