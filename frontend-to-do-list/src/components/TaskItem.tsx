import { Task } from "../types/Task";

type Props = {
  task: Task;
  onToggle: (task: Task) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  onEdit: (task: Task) => Promise<void>;
};

export default function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4 bg-white">
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-black">{task.describe}</p>
      <div className="mt-2 flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task)}
            className="accent-blue-500"
          />
          <span className="text-sm text-black">
            {task.completed ? "Completada" : "Pendiente"}
          </span>
        </label>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 hover:text-blue-700 cursor:pointer"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700 cursor:pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
