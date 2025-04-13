"use client";
import { useEffect, useState } from "react";
import { Task } from "../types/Task";
import { createTask, deleteTask, getTasks, updateTask, updateTaskStatus } from "../services/taskServices";
import TaskItem from "../components/TaskItem";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAdd = async () => {
    if (!newTitle.trim() || !newDescription.trim()) return;
    await createTask(newTitle, newDescription);
    setNewTitle("");
    setNewDescription("");
    loadTasks();
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleToggle = async (task: Task) => {
    await updateTaskStatus(task.id, !task.completed);
    loadTasks();
  };

  const handleEdit = async (task: Task) => {
    const newTitle = prompt("Nuevo título:", task.title);
    const newDescription = prompt("Nueva descripción:", task.describe);
    if (newTitle && newDescription) {
      await updateTask(task.id, {
        title: newTitle,
        describe: newDescription,
      });
      loadTasks();
    }
  };

  return (
    <main className="max-w-md mx-auto px-4 py-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📝 TODO List</h1>

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
          placeholder="Descripción"
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No hay tareas aún.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      )}
    </main>
  );
}
