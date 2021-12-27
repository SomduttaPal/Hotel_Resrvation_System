import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/";

class Service {

    getUsers() {
        return axios.get(USER_API_BASE_URL+'users');
    }

    createUsers(users) {
        return axios.post(USER_API_BASE_URL+'users', users);
    }

    getUserByEmailId(emailid) {
        return axios.get(USER_API_BASE_URL+'users/'+emailid);
    }

    updateUser(user, emailid) {
        return axios.put(USER_API_BASE_URL+'users/'+emailid, user);
    }

    getOwnerByEmailId(emailId) {
        return axios.get(USER_API_BASE_URL+'owner/'+emailId);
    }

    createOwner(owner) {
        return axios.post(USER_API_BASE_URL+'owner', owner);
    }

    addRoom(room) {
        return axios.post(USER_API_BASE_URL+'addRooms', room);
    }

    getRoom() {
        return axios.get(USER_API_BASE_URL+'rooms');
    }

    getRoomById(roomId) {
        return axios.get(USER_API_BASE_URL+'getRoom/'+roomId);
    }

    saveBooking(bookinfo) {
        return axios.post(USER_API_BASE_URL+'bookRoom', bookinfo);
    }

    getBookingForUser(emailId) {
        return axios.get(USER_API_BASE_URL+'getAllBookings/'+emailId);
    }

    getBookingForOwner(hotelId) {
        return axios.get(USER_API_BASE_URL+'getBokingsForOwner/'+hotelId);
    }

    ownerUpdate(owner, id) {
        return axios.put(USER_API_BASE_URL+'updateHotelDetails/'+id, owner);
    }

    getRoomList(id) {
        return axios.get(USER_API_BASE_URL+'showRooms/'+id)
    }

    roomUpdate(room, id) {
        return axios.put(USER_API_BASE_URL+'updateRoom/'+id, room)
    }

    getAvailableRoom() {
        return axios.get(USER_API_BASE_URL+'getAvailableRooms');
    }

    getAcRoom() {
        return axios.get(USER_API_BASE_URL+'getRoomsByAc/true');
    }

    getNonAcRoom() {
        return axios.get(USER_API_BASE_URL+'getRoomsByAc/false');
    }

    getOneBedRoom() {
        return axios.get(USER_API_BASE_URL+'getRoombybednumber/1');
    }

    getTwoBedRoom() {
        return axios.get(USER_API_BASE_URL+'getRoombybednumber/2');
    }

    getThreeBedRoom() {
        return axios.get(USER_API_BASE_URL+'getRoombybednumber/3');
    }

}

export default new Service()