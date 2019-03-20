export class Todo {
  id: number;
  name: string;
  description: string;
  level: number;
  expandable: boolean;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
