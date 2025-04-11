import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./task.entity";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) { }

    //Crear tarea
    create(task: Partial<Task>) {
        const newTask = this.taskRepository.create(task);
        return this.taskRepository.save(newTask);
    }

    //Obtener todas las tareas
    findAll() {
        return this.taskRepository.find({ order: { createAt: 'ASC' } }); //ordenar por fecha de creación
    }

    //actualizar tarea
    update(id: number, updates: Partial<Task>) {
        return this.taskRepository.update(id, updates);
    }

    //Eliminar tarea
    delete(id: number) {
        return this.taskRepository.delete(id)
    }
   
      
}