
import { getRandomId, getRandomDate } from '../utils/id.js';

export type Task = {
    readonly id: string,
    title: string,
    created: Date,
    description?: string,
    completed: boolean,
}

// Наименование функций в came/case
export type filter = 'all' | 'active' | 'complete';

export function addTask(title: string): Task {
    return {
    id: getRandomId(),
    title,
    created: new Date(Date.now() + getRandomDate()*1000),
    description: 'lorem',
    completed: false,

    }
}