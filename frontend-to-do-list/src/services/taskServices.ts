import { Task } from "@/types/Task";
import axios from "axios";

const API_URL = 'http://localhost:3001/tasks';

export const getTasks = async (): Promise<Task[]> => {
    const res = await axios.get(API_URL);
    return res.data;
}

export const createTask = async (title: string, describe:string): Promise<Task> => {
    const res = await axios.post(API_URL, { title, describe });
    return res.data;
}

export const deleteTask = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
}


export const updateTaskStatus = (id: number, completed: boolean) => {
    return axios.put(`http://localhost:3001/tasks/${id}`, { completed });
  }
  
  export const updateTask = (id: number, updates: Partial<Task>) => {
    return axios.put(`http://localhost:3001/tasks/${id}`, updates);
  };
  


