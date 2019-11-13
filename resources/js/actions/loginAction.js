import axios from "axios";

export const LOGIN = "LOGIN";
export const login = token => dispatch => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    axios
        .get("http://localhost:8181/api/auth")
        .then(response => {
            // handle success
            dispatch({
                type: LOGIN,
                isLogin: true,
                name: response.data.name,
                token
            });
        })
        .catch(error => {
            // handle error
            console.log(error);
        });

    //  isLogin will save in store and can be called from any view
};

export const logout = () => async dispatch => {
    var token = localStorage.getItem("token");
    axios
        .post("http://localhost:8181/api/logout", {
            token: token
        })
        .then(response => {
            localStorage.removeItem("token");
            dispatch({
                type: LOGIN,
                isLogin: false,
                name: "",
                token: ""
            });
        })
        .catch(error => {
            console.log(error);
        });
};
