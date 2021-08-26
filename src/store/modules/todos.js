import axios from "axios";

const state = {
    todos: [],
}


const getters = {
    allTodos(state) {
        return state.todos;
    }
}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    addTodo: (state, todo) => {
        state.todos.unshift(todo);
    },
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    filterTodos: (state, todos) => state.todos = todos,
    updateTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);

        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo)
        }

    }
}

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

        commit("setTodos", response.data)
    },

    async addTodo(context, title) {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false });
        console.log(response.data)

        context.commit("addTodo", response.data)
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('deleteTodo', id)
    },

    async filterTodos({ commit }, amount) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${amount}`);

        console.log(amount)
        commit("filterTodos", response.data)
    },

    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);

        commit("updateTodo", response.data);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}