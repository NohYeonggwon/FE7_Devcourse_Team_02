export const todos = [];

export function addTodo(text) {
  const value = String(text ?? "").trim();
  if (this.todos.some((t) => t.text === value)) {
    console.log(`이미 리스트에 있음: ${value}`);
    return null;
  } else if (!value) throw new Error("텍스트가 비어있습니다.");

  const newTodo = {
    id: crypto.randomUUID(),
    text: value,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    check: false,
  };
  todos.push(newTodo);
  return newTodo;
}

export function deleteTodo(id) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx < 0) throw new Error("해당 id의 todo를 찾을 수 없습니다.");
  const [removed] = todos.splice(idx, 1);
  return removed;
}
export function modifyTodo(id, text) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx < 0) throw new Error("해당 id의 todo를 찾을 수 없습니다.");
  const value = String(text ?? "").trim();
  if (!value) throw new Error("텍스트가 비어있습니다.");
  todos[idx] = {
    ...todos[idx],
    text: value,
    updatedAt: new Date().toLocaleString(),
  };
  return todos[idx];
}
export function toggleTodo(id) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx < 0) throw new Error("해당 id의 todo를 찾을 수 없습니다.");
  todos[idx] = {
    ...todos[idx],
    check: !todos[idx].check,
    updatedAt: new Date().toLocaleString(),
  };
  return todos[idx];
}
export function printTodoList(filter = "all") {
  let list = todos;
  if (filter === "done") list = todos.filter((t) => t.check);
  if (filter === "todo") list = todos.filter((t) => !t.check);
  if (!list.length) {
    console.log("(비어 있음)");
    return;
  }
  console.table(
    list.map(({ id, text, check, createdAt, updatedAt }, i) => ({
      "#": i + 1,
      id,
      text,
      done: `[${check ? "✔" : " "}]`,
      createdAt,
      updatedAt,
    }))
  );
}
