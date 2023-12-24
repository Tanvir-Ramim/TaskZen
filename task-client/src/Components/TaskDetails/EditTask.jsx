// import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useContext } from "react";

import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const EditTask = () => {
  const {user} = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
const task = useLoaderData();
  const onSubmit = async (data) => {
    console.log("Form data:", data);
    if(!data){
        console.log("No data found");
    }
    // Now send the tasks item data with the image URL
    const updatedTask = {
      title: data.title,
      deadline: data.deadline,
      priority: data.priority,
      state: data.state,
      note: data.content,
      userEmail:user.email
    };
    console.log("New task:", updatedTask);

    const tasksRes = await axiosPublic.put(`/tasks/${task._id}`, updatedTask);
    console.log(tasksRes.data);
    if (tasksRes.data.modifiedCount) {
      reset();
      window.history.back();
      Swal.fire({
        title: "Updated!",
        text: `Task Updated successfully`,
        timer: 1500,
        confirmButtonText: "Ok!",
      });
      console.log("Updated Task on server", tasksRes.data);
    }
  };

  return (
    <div className="lg:px-[100px] lg:py-4 min-h-screen">
      <Helmet>
        <title>{`TaskZen| Update Task`}</title>
      </Helmet>
      <button className="my-2 bg-red-500 px-4 py-1 rounded-md font-semibold" onClick={()=>window.history.back()}>
      Go Back
    </button>
      <div className="bg-gray-600 rounded-lg p-2 lg:p-8 ">
        <h1 className="text-3xl font-bold text-red-500 w-fit mx-auto px-8 pb-2 border-b-2 border-red-500">
          Update Task
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
                defaultValue={task.title}
                className="h-12 rounded-lg px-4 border-2 border-red-500 font-semibold text-md text-gray-400 w-full"
              />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <input
                id="deadline"
                name="deadline"
                {...register("deadline", { required: true })}
                type="date"
                placeholder="Set Deadline"
                defaultValue={task.deadline}
                className="h-12 rounded-lg px-4 border-2 border-red-500 font-semibold text-sm text-gray-400 w-full"
              />
              <select
                id="priority"
                name="priority"
                defaultValue={task.priority}
                {...register("priority", { required: true })}
                className="h-12 rounded-lg px-4 border-2 border-red-500 font-semibold text-sm text-gray-400 w-full"
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
              <select
                id="state"
                name="state"
                defaultValue={task.state}
                {...register("state", { required: true })}
                className="h-12 rounded-lg px-4 border-2 border-red-500 font-semibold text-sm text-gray-400 w-full"
              >
                <option
                  className="text-gray-400 font-semibold"
                  disabled
                  selected
                >
                  State
                </option>
                <option className="text-red-500 font-semibold">To-Do</option>
                <option className="text-blue-500 font-semibold">On-Going</option>
                <option className="text-green-500 font-semibold">Completed</option>
              </select>
            </div>
            <textarea id="content" defaultValue={task.note} name="content"  {...register("content", { required: true })} className="h-[200px] rounded-lg p-4 border-2 border-red-500 font-semibold text-xl text-gray-400 w-full" placeholder="Add a New Task"></textarea>
          
            <input
              type="submit"
              value="Update"
              className="btn bg-red-500 px-12 text-md font-semibold text-black w-fit border-none mt-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

EditTask.propTypes = {};

export default EditTask;
