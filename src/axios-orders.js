import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-builder-f00ba.firebaseio.com/"
});

export default instance;