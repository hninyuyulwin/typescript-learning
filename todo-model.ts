interface TodoModel {
  id: string;
  title: string;
  complete?: boolean;
}

let todo: TodoModel = {
  id: "1",
  title: "Learning typescript",
  complete: false,
};
console.log("Todo : ", todo);

