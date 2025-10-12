import type { Task } from '../entities/task.js';

export function sortByDate(tasks: Task[]) {
    return [...tasks].sort((a, b) => a.created.getTime() - b.created.getTime());
}