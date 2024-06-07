import { createHashRouter } from "react-router-dom";
import Resume from '../pages/Resume'
import App from '../App.tsx'

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
]);

export default router

