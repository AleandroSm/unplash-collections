import { createBrowserRouter } from "react-router-dom"
import { SearchPage } from "../pages/SearchPage"
import { ResultsPage } from "../pages/ResultPage"
import { DetailPage } from "../pages/DetailPage"
import { CollectionPage } from "../pages/CollectionPage"
import { CollectionDetailPage } from "../pages/CollectionDetailPage"
import ErrorPage from "../pages/ErrorPage"
import ErroApiPage from "../pages/ErroApiPage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: < SearchPage />,
        errorElement: < ErrorPage />
    },
    {
        path: '/search/:query',
        element: < ResultsPage />,
    },
    {
        path: '/detail/:id',
        element: < DetailPage />,
    },
    {
        path: '/collections',
        element: < CollectionPage />,
    },
    {
        path: '/collections/:name',
        element: < CollectionDetailPage />
    },
    {
        path: '/error',
        element: < ErroApiPage />
    }
])
