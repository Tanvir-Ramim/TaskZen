import PropTypes from 'prop-types'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowLeftCircleFill className='z-30 text-yellow-400 text-6xl mb-1/2 '/>
    </div>
  );
}

export function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowRightCircleFill className='z-30 text-yellow-400 text-6xl mb-1/2'/>
    </div>
  );
}

CustomPrevArrow.propTypes = {
    className:PropTypes.node, 
    style:PropTypes.node, 
    onClick:PropTypes.node,
};
CustomNextArrow.propTypes = {
    className:PropTypes.node, 
    style:PropTypes.node, 
    onClick:PropTypes.node,
};