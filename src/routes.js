import Home from "./Pages/Home/Home";
import DetailCar from "./Pages/DetailCar/DetailCar";
import Works from "./Pages/Gworks/Works";

const routes = [
    {
        id:1,
        path: "/",
        component: Home
    },
    {
        id:2,
        path: "/detailcar",
        component: DetailCar
    },
    {
        id:3,
        path: "/works",
        component: Works
    },

]

export default routes