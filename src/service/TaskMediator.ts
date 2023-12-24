
import { ITasks } from "../models/ITasks";

export enum LocalName {
    TODO = 'todo',
    COMPLED = 'compled'
}

class TaskMediator {

    async saveTask(todoTask: ITasks, type: LocalName.TODO | LocalName.COMPLED) {
        try {
            const tasks = localStorage.getItem(type) || '[]';
            const json: ITasks[] = JSON.parse(tasks);
            json.push(todoTask)
            localStorage.setItem(type, JSON.stringify(json))
            await new Promise(resolve => setTimeout(resolve, 250));
        } catch (error) {
            console.error('Ошибка сохранения данных в localStorage:', error);
        }
    }

    async fetchTasks() {
        try {
            const todoTasks = localStorage.getItem(LocalName.TODO) || '[]';
            const completedTasks = localStorage.getItem(LocalName.COMPLED) || '[]';
            const todo: ITasks[] = JSON.parse(todoTasks)
            const compled: ITasks[] = JSON.parse(completedTasks)

            await new Promise(resolve => setTimeout(resolve, 500));
            return [todo, compled]
        } catch (error) {
            console.error('Ошибка получения данных из localStorage:', error);
            return [[], []] as [ITasks[], ITasks[]]
        }

    }

    async deleteTask(id: number, type: LocalName.TODO | LocalName.COMPLED) {
        try {
            const tasks = localStorage.getItem(type) || '[]';
            const list: ITasks[] = JSON.parse(tasks);
            const changeList = list.filter(task => task.id !== id);
            localStorage.setItem(type, JSON.stringify(changeList));
            await new Promise(resolve => setTimeout(resolve, 250));
        } catch (error) {
            console.error('Ошибка удаления данных из localStorage:', error);
        }

    }
}

export const mediator = new TaskMediator()