import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import CreateNewTask from "../Dashboard/CreateNewTask";
import ToDoList from "../Dashboard/ToDoList";
import EditTask from "../Components/TaskDetails/EditTask";
import Todo from "../Dashboard/Todo";
import OnGoing from "../Dashboard/OnGoing";
import Completed from "../Dashboard/Completed";
import UserProfile from "../Dashboard/UserProfile";
import ErrorPage from "../Error Page/Error";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contactUs",
        element:<PrivateRouter><ContactUs></ContactUs></PrivateRouter>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
     <PrivateRouter> <Dashboard /></PrivateRouter>
       
     
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/CreateNewTask",
        element: <PrivateRouter> <CreateNewTask /></PrivateRouter>,
      },

      {
        path: "/dashboard/toDoList",
        element: <PrivateRouter><ToDoList /></PrivateRouter>,
      },
      {
        path: "/dashboard/todo",
        element: <PrivateRouter><Todo /></PrivateRouter>,
      },
      {
        path: "/dashboard/onGoing",
        element: <PrivateRouter><OnGoing /></PrivateRouter>,
      },
      {
        path: "/dashboard/completed",
        element: <PrivateRouter><Completed /></PrivateRouter>,
      },
      {
        path: "/dashboard/profile",
        element: <PrivateRouter><UserProfile /></PrivateRouter>,
      },
      {
        path: "/dashboard/toDoList/editTask/:id",
        element: <PrivateRouter><EditTask /></PrivateRouter>,
        loader: ({ params }) =>
          fetch(`https://task-server-three-swart.vercel.app/tasks/${params.id}`),
      },
    ],
  },
]);
