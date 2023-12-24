import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const Card = ({ task }) => {

    const handleDelete = (taskId) => { 
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`https://task-server-three-swart.vercel.app/tasks/${taskId}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task deleted successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                
            }
            setTimeout(() => {
                window.location.reload();
              }, 1500);
        })  
        }
      });                           
        
    }
  const truncatedNote = truncateText(task?.note || "", 230);

  return (
    <div>
        <div className="bg-gray-300 cursor-pointer rounded-lg p-4 flex flex-col gap-2 h-[350px] md:h-[300px] border-[4px] border-red-500">
      
          <div className="flex flex-col md:flex-row items-center bg-black rounded-md bg-opacity-70 text-xs">
            <span className="font-semibold flex items-center text-white px-2">Priority:
          <p
            className={`w-fit px-2  ${
              task.priority === "Low" && "text-red-500"
            } ${task.priority === "Moderate" && "text-orange-500"} ${
              task.priority === "High" && "text-red-500"
            }  font-semibold rounded-md py-1`}
          >
            {task.priority}
          </p>
            </span>
            <span className="font-semibold flex items-center text-white">Status:
          <p
            className={`w-fit px-2  ${
              task.state === "Completed" && "text-green-500"
            } ${task.state === "On-Going" && "text-blue-500"} ${
              task.state === "To-Do" && "text-red-500"
            }  font-semibold rounded-md py-1`}
          >
            {task.state}
          </p>
            </span>

            <span className="font-semibold flex items-center text-white">Update:
            <Link to={`/dashboard/toDoList/editTask/${task._id}`}>
          <FaEdit className="ml-2 text-red-500 text-base " />
        </Link>
            </span>
          </div>
          <h1 className="text-2xl w-full py-2 font-semibold">{task?.title}</h1>
          <article className="overflow-hidden overflow-ellipsis">{truncatedNote}</article>
         
      
          <button onClick={()=>handleDelete(task._id)} className="w-full rounded-md bg-black bg-opacity-80 py-1 text-md text-red-500 font-semibold mt-auto">Delete</button>
        </div>
    </div>
  );
};

Card.propTypes = {
    task: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      state: PropTypes.string,
      priority: PropTypes.string,
      note: PropTypes.string,
    }).isRequired,
  };
  
export default Card;


