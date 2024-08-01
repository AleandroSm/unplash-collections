import { createApi } from "unsplash-js"

const accessKey = import.meta.env.VITE_ACCESS_KEY


export const unsplashApi = createApi({accessKey: accessKey})


   
