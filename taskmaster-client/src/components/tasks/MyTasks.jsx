import { CheckIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userTasks } from '../../redux/features/tasks/tasksSlice';
import TaskDetailsModal from './TaskDetailsModal';
import { useState } from 'react';
import { useGetTasksQuery, useUpdateTaskMutation } from '../../redux/features/api/tasksApi';

const MyTasks = () => {

  const {name: userName} = useSelector((state) => state.userSlice)
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const [taskId, setTaskId] = useState(0)
  const {data: tasks} = useGetTasksQuery();
  const [updateTask] = useUpdateTaskMutation();

  const handleModal = (id) => {
    setTaskId(id)
    setIsOpen(!isOpen)
  }
  
  // Filter tasks based on userName
  const userSpecificTasks = tasks ? tasks.filter(item => item.assignedTo === userName) : [];

  useEffect(() => {
    dispatch(userTasks(userName))
  }, [userName, dispatch, tasks])

  // Update task status
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

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId}/>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className="h-[750px] overflow-auto space-y-3">
        {userSpecificTasks?.map(item => (
          <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button onClick={()=> handleModal(item._id)} className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button onClick={() => handleUpdate(item._id, 'complete')} className="grid place-content-center" title="Complete">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
