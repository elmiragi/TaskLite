
import { getRandomId} from '../utils/id.js';

export type Task = {
    readonly id: string,
    title: string,
    created: Date,
    description?: string,
    completed: boolean,
    deadline?: Date | null,
}

// Наименование функций в came/case
export type filter = 'all' | 'active' | 'complete';

export function addTask(title: string): Task {
    return {
    id: getRandomId(),
    title,
    created: new Date(Date.now()),
    description: '',
    completed: false,
    deadline: null,
    }
}