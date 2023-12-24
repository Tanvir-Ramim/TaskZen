// import PropTypes from 'prop-types';

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";




const useTasks = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
 const {data: tasks=[], refetch} = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async()=>{
        const res = await axiosPublic.get(`/tasks?userEmail=${user?.email}`)
        return res.data
    }
 });
 return [tasks, refetch]

};

useTasks.propTypes = {};

export default useTasks;
