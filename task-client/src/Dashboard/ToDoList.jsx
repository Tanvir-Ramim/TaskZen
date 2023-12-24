// import PropTypes from 'prop-types';

import Card from "../Components/card/Card";
import useTasks from "../Hooks/useTasks";
import empty from "../assets/images/others/empty.png";

const ToDoList = () => {
  const [tasks, refetch] = useTasks();
  refetch();
  return (
    <div>
      {tasks.length > 0 ? (
        <>
          <p className="text-5xl text-red-500 font-bold text-center mt-4">
            All Tasks
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            {tasks.map((task) => (
              <Card task={task} key={task._id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <img src={empty} alt="" className="m-auto h-[70vh]" />
          <p className="text-3xl text-red-500 font-bold text-center">
            No Data Found
          </p>
        </>
      )}
    </div>
  );
};

ToDoList.propTypes = {};

export default ToDoList;
