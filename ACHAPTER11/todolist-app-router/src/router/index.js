import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import TodoList from '@/pages/TodoList.vue';
import AddTodo from '@/pages/AddTodo.vue';
import EditTodo from '@/pages/EditTodo.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'home', component: About },
        { path: '/todos', name: 'home', component: TodoList },
        { path: '/todos/add', name: 'home', component: AddTodo },
        { path: '/todos/edit/:id', name: 'home', component: EditTodo },
        { path: '/:paths(.*)*', name: 'home', component: NotFound },
    ],
});

export default router;
