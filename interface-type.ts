interface Todo {
  id: string;
  title: string;
}

interface Todo {
  completed: boolean;
}

let todos: Todo[] = [
  {
    id: "1",
    title: "Hello",
    completed: true,
  },
  {
    id: "2",
    title: "World",
    completed: true,
  },
  {
    id: "3",
    title: "Winter",
    completed: false,
  },
];
