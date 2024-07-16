import { createHashRouter } from "react-router-dom";
import Resume from '../pages/Resume'
import App from '../App.tsx'
import TemplateList from "@/pages/TemplateList";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
    {
        path: "/templateList",
        element: <TemplateList />,
    },
]);

export default router

