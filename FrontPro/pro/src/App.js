import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { SignUpUserComponent } from './components/SignUpUserComponent';
import { LoginForm } from './components/LoginForm';
import { UserHomeComponent } from './components/UserHomeComponent';
import { ProfileUserComponent } from './components/ProfileUserComponent';
import { UpdateUserComponent } from './components/UpdateUserComponent';
import { HotelListComponent } from './components/HotelListComponent';
import { UserLogoutComponent } from './components/UserLogoutComponent';
import { LoginFormOwner } from './components/OwnerComponents/LoginFormOwner';
import { SignUpOwnerComponent } from './components/OwnerComponents/SignUpOwnerComponent';
import { OwnerHomeComponent } from './components/OwnerComponents/OwnerHomeComponent';
import { AddRoomComponent } from './components/OwnerComponents/AddRoomComponent';
import { ProfileOwnerComponent } from './components/OwnerComponents/ProfileOwnerComponent';
import { UpdateOwnerComponent } from './components/OwnerComponents/UpdateOwnerComponent';
import { ConfirmRoomComponent } from './components/ConfirmRoomComponent';
import { HotelListComponentWi } from './components/HotelListComponentWI';
import { UserBookingHistory } from './components/UserBookingHistory';
import { OwnerBookingHistory } from './components/OwnerComponents/OwnerBookingHistory';
import { OwnerLogoutComponent } from './components/OwnerComponents/OwnerLogoutComponent';
import { RoomListComponent } from './components/OwnerComponents/RoomListComponent';
import { UpdateRoomComponent } from './components/OwnerComponents/UpdateRoomComponent';
import { FilterRoomsComponent } from './components/FilterRoomsComponent';
import { FooterComponent } from './components/FotterComponent';
import { AboutUsComponent } from './components/AboutUsComponent';
import { ContactUsComponent } from './components/ContactUsComponent';

function App() {
  return <div>
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={HomeComponent}></Route>
        <Route path="/adduser" component={SignUpUserComponent}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/homeuser/:emailId" component={UserHomeComponent}></Route>
        <Route path="/profileuser" component={ProfileUserComponent}></Route>
        <Route path="/updateuser/:emailId" component={UpdateUserComponent}></Route>
        <Route path="/logout" component={UserLogoutComponent}></Route>
        <Route path="/hotellist" component={HotelListComponentWi}></Route>
        <Route path="/mybooking" component={UserBookingHistory}></Route>
        <Route path="/roomsbyfilter" component={FilterRoomsComponent}></Route>
        <Route path="/aboutus" component={AboutUsComponent}></Route>
        <Route path="/contactus" component={ContactUsComponent}></Route>

        {/* Owner Path */}
        <Route path="/loginowner" component={LoginFormOwner}></Route>
        <Route path="/addowner" component={SignUpOwnerComponent}></Route>
        <Route path="/homeowner" component={OwnerHomeComponent}></Route>
        <Route path="/addroom" component={AddRoomComponent}></Route>
        <Route path="/profileowner" component={ProfileOwnerComponent}></Route>
        <Route path="/updateowner" component={UpdateOwnerComponent}></Route>
        <Route path="/confirm/:roomId" component={ConfirmRoomComponent}></Route>
        <Route path="/roombooking/:hotelId" component={OwnerBookingHistory}></Route>
        <Route path="/ownerlogout" component={OwnerLogoutComponent}></Route>
        <Route path="/roomlist/:hotelId" component={RoomListComponent}></Route>
        <Route path="/updateroom/:roomId" component={UpdateRoomComponent}></Route>
      </Switch>
    </div>
  </Router>
  <FooterComponent/>
</div>
}

export default App;
