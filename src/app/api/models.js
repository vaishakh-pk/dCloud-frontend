import {Model, baseUrl } from "./api"

export const Auth = (route) => {
    return new Model(`${baseUrl}/${route}/`);
}
