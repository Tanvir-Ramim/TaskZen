// import PropTypes from 'prop-types';
import Card from "../Components/card/Card";
import useTasks from "../Hooks/useTasks";
import empty from "../assets/images/others/empty.png";

const Todo = () => {
  const [tasks, refetch] = useTasks();
  console.log("User's Tasks: ", tasks);
  refetch();

  // Filter tasks where state is "To-Do"
  const todoTasks = tasks.filter((task) => task.state === "To-Do");

  return (
    <div>
      {todoTasks.length > 0 ? (
        <>
          <p className="text-5xl text-red-500 font-bold text-center mt-4">
            To-Do Tasks
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            {todoTasks.map((task) => (
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

Todo.propTypes = {};

export default Todo;
