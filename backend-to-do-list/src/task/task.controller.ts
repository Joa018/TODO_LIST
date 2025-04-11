import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "./task.entity";

@Controller('tasks')

export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    //creando tarea -> POST
    @Post()
    create(@Body() task: Partial<Task>) {
        return this.taskService.create(task)
    }

    //obtener todas las tareas -> GET
    @Get()
    findAll() {
        return this.taskService.findAll()
    }

    //Actualizar tarea -> PUT
    @Put(':id')
    update(@Param('id') id: string, @Body() updates: Partial<Task>) {
      return this.taskService.update(+id, updates);
    }

    //Eleminar task -> DELETE
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskService.delete(+id)
    }

}
