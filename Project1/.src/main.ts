import { TodoItems } from "./TodoItems";
import { TodoCollection } from "./TodoCollection";

let Todo = [
    new TodoItems(1, "Schreinen", true), new TodoItems(2, "Lesen", true)
];

let collection =
    [
        new TodoCollection("Paul", Todo)
    ];
console.clear();
console.log(`${collection[0].Username}'s Todo List`);
let newId = collection[0].addtoDO("GO home");
let todoItem2 = collection[0].GetAllById(this.newId);
console.log(JSON.stringify(todoItem2));
