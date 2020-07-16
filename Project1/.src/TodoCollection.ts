import { TodoItems } from "./TodoItems";

export class TodoCollection {
    nextindex: number;
    constructor(public Username: string, public Todo: TodoItems[] = []) {
        this.Username = Username;
    }
    addtoDO(task: string) {
        while (this.nextindex) {
            this.GetAllById(this.nextindex)
            this.nextindex++
        }

    }

    public GetAllById(id: number) {
        return this.Todo.find(item => item.id === id)
    }
}