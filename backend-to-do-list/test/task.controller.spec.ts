// test/task.controller.spec.ts
import { Test } from '@nestjs/testing';
import { TaskController } from '../src/task/task.controller';
import { TaskService } from '../src/task/task.service';
import { Task } from '../src/task/task.entity';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('TaskController', () => {
  let taskController: TaskController;
  let taskService: TaskService;

  const mockTaskService = {
    create: vi.fn(),
    findAll: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTaskService,
        },
      ],
    }).compile();

    taskController = moduleRef.get(TaskController);
    taskService = moduleRef.get(TaskService);
  });

  it('debería crear una tarea', async () => {
    const task = { title: 'Nueva tarea', describe: 'Describe' } as Task;
    mockTaskService.create.mockResolvedValue(task);

    const result = await taskController.create(task);

    expect(result).toEqual(task);
    expect(mockTaskService.create).toHaveBeenCalledWith(task);
  });

  it('debería retornar todas las tareas', async () => {
    const tasks = [
      { id: 1, title: 'Tarea 1', describe: 'desc 1' },
      { id: 2, title: 'Tarea 2', describe: 'desc 2' },
    ] as Task[];

    mockTaskService.findAll.mockResolvedValue(tasks);

    const result = await taskController.findAll();

    expect(result).toEqual(tasks);
    expect(mockTaskService.findAll).toHaveBeenCalled();
  });

  it('debería actualizar una tarea', async () => {
    const updates = { completed: true };
    mockTaskService.update.mockResolvedValue({ affected: 1 });

    const result = await taskController.update('1', updates);

    expect(mockTaskService.update).toHaveBeenCalledWith(1, updates);
    expect(result).toEqual({ affected: 1 });
  });

  it('debería eliminar una tarea', async () => {
    mockTaskService.delete.mockResolvedValue({ affected: 1 });

    const result = await taskController.delete('1');

    expect(mockTaskService.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual({ affected: 1 });
  });
});
