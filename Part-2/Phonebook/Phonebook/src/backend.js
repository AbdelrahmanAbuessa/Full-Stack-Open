import axios from "axios";
const URL = "http://localhost:3001/persons";

function sendData(data) {
    const request = axios.post(URL, data);
    return request.then((response) => {
        console.log(response.data);
        return response.data;
    });
}

function getData() {
    const request = axios.get(URL);
    return request.then((response) => {
        console.log(response.data);
        return response.data;
    });
}

function deleteData(id) {
    const request = axios.delete(`${URL}/${id}`);
    return request.then((response) => {
        console.log(response.data);
        return response.data;
    });
}

function mutateData(id, data) {
    const request = axios.put(`${URL}/${id}`, data);
    return request.then((response) => {
        console.log(response.data);
        return response.data;
    });
}

export default { sendData, getData, deleteData, mutateData };
