'use client'
interface TaskFormProps {
  newTitle: string;
  newDescription: string;
  setNewTitle: (title: string) => void;
  setNewDescription: (desc: string) => void;
  onAdd: () => void;
}

export default function TaskForm({
  newTitle,
  newDescription,
  setNewTitle,
  setNewDescription,
  onAdd,
}: TaskFormProps) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Nueva tarea"
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Descripción de la tarea"
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={onAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Agregar
      </button>
    </div>
  );
}
