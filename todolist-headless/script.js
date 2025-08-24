const todo = {
  todos: [],

  addTodo(text) {
    const id = crypto.randomUUID();
    const newTodo = {
      text: text,
      id: id,
      createdAt: new Date(),
      updatedAt: new Date(),
      check: false,
    };
    this.todos.push(newTodo);
    console.log(`추가됨: ${text}`);
    return newTodo;
  },

  deleteTodo(id) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index >= 0) {
      const removed = this.todos.splice(index, 1)[0];
      console.log(`삭제 완료: ${removed.text}`);
      return true;
    } else {
      console.log(`삭제 실패: id(${id}) 없음`);
      return false;
    }
  },

  modifyTodo(id, newText) {
    const t = this.todos.find((t) => t.id === id);
    if (t) {
      console.log(`수정 완료: "${t.text}" -> "${newText}"`);
      t.text = newText;
      return true;
    } else {
      console.log(`수정 실패: id ${id} 없음`);
      return false;
    }
  },

  toggleTodo(id) {
    const t = this.todos.find((t) => t.id === id);
    if (t) {
      t.check = !t.check;
      console.log(`완료: ${t.text} -> ${t.check}`);
      return true;
    } else {
      console.log(`실패: id ${id} 없음`);
      return false;
    }
  },

  printTodoList() {
    console.log("=== Todo List ===");
    if (this.todos.length === 0) {
      console.log("등록된 할일 없음");
    } else {
      this.todos.forEach((t, i) => {
        console.log(
          `${i + 1}. [${t.check ? "✔" : " "}] ${t.text} (id: ${t.id})`
        );
      });
    }
  },
};

export default todo;
