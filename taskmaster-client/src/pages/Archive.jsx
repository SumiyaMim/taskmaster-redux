import TaskCard from '../components/tasks/TaskCard';
import { useGetTasksQuery } from '../redux/features/api/tasksApi';

const Archive = () => {

  // get archive tasks
  const {data: tasks} = useGetTasksQuery();
  const archiveTasks = tasks ? tasks.filter(item => item.status === 'archive') : [];

  return (
    <div className="p-10">
      <div>
        <h1 className="text-xl font-semibold mb-10">Archive board</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {archiveTasks?.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
