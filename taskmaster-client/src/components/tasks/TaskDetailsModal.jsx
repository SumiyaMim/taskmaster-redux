import Modal from "../ui/Modal"
import { useGetTasksQuery } from "../../redux/features/api/tasksApi";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {

    const { data: tasks, isLoading, isError } = useGetTasksQuery();

    // Check for loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Check for error state
    if (isError) {
        return <div>Error fetching tasks data...</div>;
    }

    // get specific task
    const task = tasks.find((item) => item._id === id);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
            {task?.description}
        </Modal>
    );
}

export default TaskDetailsModal;
