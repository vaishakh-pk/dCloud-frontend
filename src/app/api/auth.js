import { baseUrl, post } from "./api";


export function getAuth() {
    return localStorage.getItem("accessToken");
}

function setAuth(token) {
    localStorage.setItem("accessToken", token);
}

function getRefresh() {
    return localStorage.getItem("refreshToken");
}

function setRefresh(token) {
    localStorage.setItem("refreshToken", token);

}

async function refreshToken() {

    const refresh_token = getRefresh();
    const kwargs = {
        refresh: refresh_token
    };
    await post(`${baseUrl}/token/refresh`, kwargs).then((response) => {
        setRefresh(response.refresh);
        setAuth(response.access);
        timer = Date.now();
    });
}

export function refresh_user(tries = 0) {
    const access_token = getAuth();

    post(`${baseUrl}/auth/users/me/`, {}, { "Authorization": `Bearer ${access_token}` }).then((response) => {
        setObj("user", response.results[0]);
    }).catch((error) => {
        console.log(error);
        if (tries < 1)

            refreshToken().then(() => {
                refresh_user(1);
            });

    });


}

export function setObj(str, data) {
    localStorage.setItem(str, JSON.stringify(data));

}

export function getObj(str) {
    const item = localStorage.getItem(str);
    return JSON.parse(item || "{}");
}

let timer = Date.now();

function makeid(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++)

        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));

    return result;
}
