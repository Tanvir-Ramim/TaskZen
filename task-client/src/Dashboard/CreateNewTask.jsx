// import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const CreateNewTask = () => {
  const {user} = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    if(!data){
        console.log("No data found");
    }
    // Now send the tasks item data with the image URL
    const newTask = {
      title: data.title,
      deadline: data.deadline,
      priority: data.priority,
      state:"To-Do",
      note: data.content,
      userEmail:user.email
    };
    console.log("New task:", newTask);

    const tasksRes = await axiosPublic.post("/tasks", newTask);
    console.log(tasksRes.data);
    if (tasksRes.data.insertedId) {
      reset();
      Swal.fire({
        title: "Added!",
        text: `New Task added successfully`,
        timer: 1500,
        confirmButtonText: "Ok!",
      });
      console.log("With image URL:", tasksRes.data);
    }
  };

  return (
    <div className="lg:px-[100px] py-4 min-h-screen">
      <Helmet>
        <title>{`TaskZen | Add Note`}</title>
      </Helmet>
      <div className="bg-gray-600 rounded-lg p-2 md:p-8 ">
        <h1 className="text-3xl text-center font-bold text-white w-fit mx-auto px-8 pb-2 border-b-2 border-red-500">
          Create a New Task
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-2 md:p-12 bg- rounded-lg m-2 md:mx-12 mb-12 mt-4 border-2 border-red-500 flex flex-col gap-4">
            <div className="">
              <input
                id="title"
                name="title"
                {...register("title", { required: true })}
                type="text"
                placeholder="Title"
                className="h-12 rounded-lg px-4 border-2 border-red-500 font-semibold text-xl text-gray-400 w-full"
              />
            </div>
            <div className="flex gap-4">
              <input
                id="deadline"
                name="deadline"
                {...register("deadline", { required: true })}
                type="date"
                placeholder="Set Deadline"
                className="h-12 rounded-lg px-4 border-2 border-red-500 font-semibold text-xl text-gray-400 w-full"
              />
              <select
                id="priority"
                name="priority"
                {...register("priority", { required: true })}
                className="h-12 rounded-lg px-4 border-2 border-red-500 font-semibold text-xl text-gray-400 w-full"
              >
                <option
                  className="text-gray-400 font-semibold"
                  disabled
                  selected
                >
                  Set Priority?
                </option>
                <option className="text-red-500 font-semibold">Low</option>
                <option className="text-blue-500 font-semibold">Moderate</option>
                <option className="text-green-500 font-semibold">High</option>
              </select>
            </div>
            <textarea id="content" name="content"  {...register("content", { required: true })} className="h-[200px] rounded-lg p-4 border-2 border-red-500 font-semibold text-xl text-gray-400 w-full" placeholder="Add a New Task"></textarea>
              
            <input
              type="submit"
              value="Add Note"
              className="btn bg-red-400 px-12 text-xl font-semibold text-black w-fit border-none mt-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

CreateNewTask.propTypes = {};

export default CreateNewTask;
