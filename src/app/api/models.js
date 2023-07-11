import {Model, baseUrl } from "./api"

export const Event = new Model(baseUrl + "/api/events/" )

export const Auth = new Model(baseUrl + "/api/login/" )
