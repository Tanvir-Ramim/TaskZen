import { useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; // Import the AOS CSS
import "./Testimonials.css";
import bankerImg from "../../../assets/images/others/banker.jpg"
import corporateImg from "../../../assets/images/others/corporate.jpg"
import developerImg from "../../../assets/images/others/developer.jpg";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Specify the animation duration
      easing: 'ease-out-cubic', // Specify the easing function
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div  className="md:px-[90px] py-12 ">
      <div className="text-center md:w-1/2 mx-auto">
        <p className="text-xl  text-red-500 font-bold pb-1">whom this can be of benefit</p>
        <h1 className="text-3xl lg:text-[45px] text-gray-600  font-bold">Different Types of Users</h1>
        <p className="text-[16px] text-white font-semibold pt-4">
          Discover how people from different backgrounds benefit from our platform.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <Slider className="my-4 md:my-12 px-8" {...settings}>
          <div className="z-10 h-[400px] lg:h-[300px] bg-gray-600 card border-2  rounded-lg p-4 lg:p-12 space-y-4 mx-3 max-w-[90%]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col lg:flex-row gap-3 items-center">
                <img className=" rounded-full w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] border-2 border-red-500 p-1" src={developerImg} alt="" />
                <div className='lg:w-1/2'>
                  <h1 className="text-[25px] text-red-500 font-bold">Developers</h1>
                  <div className="text-md text-gray-500">
                    <p className='text-white'>
                      {`Developers love our platform for its robust APIs, extensive documentation, and seamless integration capabilities.
                     `}
                    </p>
                  </div>
                </div>
              </div>
              <FaQuoteRight className="text-[50px] text-red-500" />
            </div>
          </div>

          <div className="z-10 h-[400px] lg:h-[300px] bg-gray-600 card border-2  rounded-lg p-4 lg:p-12 space-y-4 mx-3 max-w-[90%]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col lg:flex-row gap-3 items-center">
                <img className="rounded-full w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] border-2 border-red-500 p-1" src={corporateImg} alt="" />
                <div className='lg:w-1/2'>
                  <h1 className="text-[25px] text-red-500 font-bold">Corporate</h1>
                  <div className="text-md text-gray-500">
                    <p className='text-white'>
                      Corporate professionals find our platform to be a valuable asset for enhancing productivity and collaboration.
                    </p>
                  </div>
                </div>
              </div>
              <FaQuoteRight className="text-[50px] text-red-500" />
            </div>
          </div>

          <div className="z-10 h-[400px] lg:h-[300px] bg-gray-600 card border-2  rounded-lg p-4 lg:p-12 space-y-4 mx-3 max-w-[90%]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col lg:flex-row gap-3 items-center">
                <img className=" rounded-full w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] border-2 border-red-500 p-1" src={bankerImg} alt="" />
                <div className='lg:w-1/2'>
                  <h1 className="text-[25px] text-red-500 font-bold">Bankers</h1>
                  <div className="text-md text-gray-500">
                    <p className='text-white'>
                      Bankers trust our platform for its secure and efficient financial management tools. From transaction tracking to analytics.
                    </p>
                  </div>
                </div>
              </div>
              <FaQuoteRight className="text-[50px] text-red-500" />
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
