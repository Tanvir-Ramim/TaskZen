import PropTypes from 'prop-types';
import Slider from "react-slick";

const UserSegmentCard = ({ title, description, imageSrc }) => (
  <div className="p-4 bg-white shadow-lg rounded-lg">
    <img className="w-full h-32 object-cover object-center mb-4 rounded-lg" src={imageSrc} alt={title} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

UserSegmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const UsersSegmentCard = () => {
  const sliderSettings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };

  const userSegments = [
    {
      title: "Developers",
      description: "Stay organized with tasks and projects. Manage your coding tasks efficiently and boost productivity.",
      imageSrc: "developer-image.jpg",
    },
    {
      title: "Corporate Professionals",
      description: "Streamline your workday. Keep track of meetings, deadlines, and collaborate seamlessly with your team.",
      imageSrc: "corporate-professional-image.jpg",
    },
    {
      title: "Bankers",
      description: "Enhance task management in the fast-paced banking environment. Prioritize and organize your daily tasks effectively.",
      imageSrc: "banker-image.jpg",
    },

  ];

  return (
    <div className="w-full px-12 py-8 ">
      <h2 className="text-3xl text-yellow-300 text-center font-bold mb-6">Who Benefits from Our App?</h2>
      <Slider {...sliderSettings}>
        {userSegments.map((segment, index) => (
          <div key={index}>
            <UserSegmentCard {...segment} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UsersSegmentCard;
