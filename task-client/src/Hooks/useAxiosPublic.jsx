import axios from "axios";

// import PropTypes from 'prop-types';
const axiosPublic = axios.create({
    baseURL: `https://task-server-three-swart.vercel.app`
})
const useAxiosPublic = () => {
    return axiosPublic;
};

useAxiosPublic.propTypes = {
    
};

export default useAxiosPublic;