export class TodoItems {
    public id: number;
    public task: string;
    public compose: boolean = false;

    public constructor(id: number, task: string, compose: boolean) {
        this.id = id;
        this.task = task;
        this.compose = compose;
    }

    public PrintDetail(): void {
        console.log(`${this.id}\t${this.task} ${this.compose ? "\t(compose)" : ""}`);


    }
}    