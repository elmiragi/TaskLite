import type {Task} from './task';

const STORAGE_KEY = 'tasks';

export function saveTask(tasks: Task[]) {
    const jsonTasks = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, jsonTasks);

}

export function loadTasks(): Task[] {
    try{
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        return parsed.map((task: any) => ({
            ...task,
            created: new Date(task.created),
            deadline: task.deadline ? new Date(task.deadline) : null,
        }));
    } catch(error) {
        return [];
    }
}