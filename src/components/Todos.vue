<template>
  <div>
    <div class="quote">
      <h3>Todos</h3>
      <p>Do or do not. There is no try.</p>
    </div>
    <div class="legend">
      <span>mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in allTodos"
        :key="todo.id"
        :class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        <i @click="onDblClick(todo)" class="far fa-check-square"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updateTodo(updatedTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.todo {
  width: 30%;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.quote {
  width: 55%;
  display: flex;
  justify-content: space-between;
}

.fa-trash-alt {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}

.fa-check-square {
  position: absolute;
  bottom: 10px;
  left: 10px;
  cursor: pointer;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.legend {
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.is-complete {
  background: #35495e;
  color: #fff;
  text-decoration: line-through;
}

@media (max-width: 760px) and (min-width: 500px) {
  .todo {
    width: 55%;
  }
}

@media (max-width: 500px) {
  .todo {
    width: 100%;
  }
}
</style>
