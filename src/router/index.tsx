import { createHashRouter } from "react-router-dom";
import Resume from '../pages/Resume'
import App from '../App.tsx'
import TemplateList from "@/pages/TemplateList";
import {useEffect} from "react";
import useReadDirAssetsTemplate from '@/hooks/useReadDirAssetsTemplate';

const Home = () => {
    const readDirAssetsTemplate = useReadDirAssetsTemplate();

    useEffect(() => {
        readDirAssetsTemplate();
    }, []);

    return <App />;
};

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
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

