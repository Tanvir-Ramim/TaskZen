// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
// import UsersSegmentCard from "./UsersSegmentCard";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>{`TaskZen | Home`}</title>
            </Helmet>
            <Banner/>
            {/* <UsersSegmentCard/> */}
            <Testimonials />
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;