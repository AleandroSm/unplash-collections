import { createBrowserRouter } from "react-router-dom"
import { SearchPage } from "../pages/SearchPage"
import { ResultsPage } from "../pages/ResultPage"
import { DetailPage } from "../pages/DetailPage"
import { CollectionPage } from "../pages/CollectionPage"
import { CollectionDetailPage } from "../pages/CollectionDetailPage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: < SearchPage />
    
    },
    {
        path: '/search/:query',
        element: < ResultsPage />
    },
    {
        path: '/detail/:id',
        element: < DetailPage />
    },
    {
        path: '/collections',
        element: < CollectionPage />,
    },
    {
        path: '/collections/:name',
        element: < CollectionDetailPage />
    }
])
