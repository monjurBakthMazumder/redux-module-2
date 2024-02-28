import { useDispatch } from "react-redux";
import MyModal from "../Ui/Modal";
import { useForm } from "react-hook-form";
import { addTask } from "../../Redux/features/tasks/tasksSlices";
const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
    setIsOpen(false);
  };
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add task"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                className="w-full rounded-md"
                {...register("title")}
              />
            </label>
            <label htmlFor="description">
              description
              <input
                type="text"
                id="description"
                className="w-full rounded-md"
                {...register("description")}
              />
            </label>
            <label htmlFor="deadline">
              deadline
              <input
                type="date"
                id="deadline"
                className="w-full rounded-md"
                {...register("deadline")}
              />
            </label>
            <label htmlFor="assignTo">
              assignTo
              <input
                type="text"
                id="assignTo"
                className="w-full rounded-md"
                {...register("assignTo")}
              />
            </label>
            <label htmlFor="priority">
              priority
              <input
                type="text"
                id="priority"
                className="w-full rounded-md"
                {...register("priority")}
              />
            </label>
          </div>
          <input
            onClick={onCancel}
            className="py-[6px] cursor-pointer px-4 bg-red-800 text-white font-semibold m-2 rounded"
            value={"reset"}
            type="button"
          />
          <input
            className="py-[6px] cursor-pointer px-4 bg-green-800 text-white font-semibold m-2 rounded"
            type="submit"
          />
        </form>
      </MyModal>
    </div>
  );
};

export default AddTasksModal;
