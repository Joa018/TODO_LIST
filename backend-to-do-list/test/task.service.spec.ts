import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TaskService } from '../src/task/task.service';
import { Repository } from 'typeorm';
import { Task } from '../src/task/task.entity';

const mockRepo = () => ({
  create: vi.fn(),
  save: vi.fn(),
  find: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
});

describe('TaskService', () => {
  let taskService: TaskService;
  let repo: ReturnType<typeof mockRepo>;

  beforeEach(() => {
    repo = mockRepo();
    taskService = new TaskService(repo as unknown as Repository<Task>);
  });

  it('should create a new task', async () => {
    const task = { title: 'Test', description: 'Desc' };
    repo.create.mockReturnValue(task);
    repo.save.mockResolvedValue(task);

    const result = await taskService.create(task);
    expect(repo.create).toHaveBeenCalledWith(task);
    expect(repo.save).toHaveBeenCalledWith(task);
    expect(result).toEqual(task);
  });
});
