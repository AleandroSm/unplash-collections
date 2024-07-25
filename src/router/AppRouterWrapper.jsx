import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoadingCollections } from "../store/collections/thunks";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";


function AppRouterWrapper(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startLoadingCollections())
    }, [])


    return <RouterProvider router={router} />

}

export default AppRouterWrapper