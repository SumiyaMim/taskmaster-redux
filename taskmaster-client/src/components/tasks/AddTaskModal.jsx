import { useForm } from "react-hook-form"
import Modal from "../ui/Modal"
import { useAddTaskMutation } from "../../redux/features/api/tasksApi";

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const {register, handleSubmit, reset } = useForm()
    const [addTask] = useAddTaskMutation();

    const onCancel = () => {
        reset()
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        addTask({...data, status: 'pending'})
        onCancel()
    }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3 mb-3">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" {...register('title')} className="w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-3 mb-3">
                <label htmlFor="description">Description</label>
                <textarea type="text" id="description" {...register('description')} className="w-full rounded-md resize-none" />
            </div>
            <div className="flex flex-col gap-3 mb-3">
                <label htmlFor="deadline">Deadline</label>
                <input type="date" id="deadline" {...register('deadline')} className="w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-3 mb-3">
                <label htmlFor="assignedTo">Assigned To</label>
                <select id="assignedTo" {...register('assignedTo')} className="w-full rounded-md" >
                    <option value="Choose one">Choose one</option>
                    <option value="Sabbir Hossain">Sabbir Hossain</option>
                    <option value="Sumiya Islam Mim">Sumiya Islam Mim</option>
                    <option value="Maliha Islam">Maliha Islam</option>
                    <option value="Mahim Khan">Mahim Khan</option>
                    <option value="Siam Ahmed">Siam Ahmed</option>
                    <option value="Abid Hasan">Abid Hasan</option>
                </select>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="priority">Priority</label>
                <select id="priority" {...register('priority')} className="w-full rounded-md" >
                    <option value="Choose one">Choose one</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div className="mt-4 flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => onCancel()}
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Submit
                    </button>
            </div>
        </form>
    </Modal>
  )
}

export default AddTaskModal
