export class Todo {
  listId: number;
  userId: number;
  name: string;
  description: string;

  constructor(
    listId: number,
    userId: number,
    name: string,
    description: string
  ) {
    this.listId = listId;
    this.userId = userId;
    this.name = name;
    this.description = description;
  }
}
