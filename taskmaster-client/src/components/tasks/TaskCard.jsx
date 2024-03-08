import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../../redux/features/api/tasksApi';

const TaskCard = ({task}) => {

  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  // update task
  const handleUpdate = (id, updatedStatus) => {
    const data = {
      status: updatedStatus
    }
    const options = {
      id: id,
      data: data
    }

    updateTask(options)
  }

  // delete task
  const handleDelete = (id) => {
    deleteTask(id);
    console.log(id)
  }

  let updatedStatus;
  if(task.status === "pending"){
    updatedStatus = 'in progress';
  } else if(task.status === "in progress"){
    updatedStatus = 'complete';
  } else{
    updatedStatus = 'archive';
  }
  
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === 'high' ? 'text-red-500' : ''
        } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>
        <div className="flex gap-3">
          <button onClick={() => handleDelete(task._id)} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() => handleUpdate(task._id, updatedStatus)}
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
