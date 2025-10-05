import type { Task } from '../entities/task.js';

export function sortByDate(tasks: Task[]) {
    return [...tasks].sort((a, b) => a.create.getTime() - b.create.getTime());
}