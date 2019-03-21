export class Task {
  taskId: number;
  listId: number;
  title: string;
  done: boolean;
  description: string;

  constructor(
    taskId: number,
    listId: number,
    title: string,
    done: boolean,
    description: string
  ) {
    this.taskId = taskId;
    this.listId = listId;
    this.title = title;
    this.done = done;
    this.description = description;
  }
}
