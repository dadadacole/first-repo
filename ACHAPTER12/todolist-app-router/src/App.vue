<template>
    <div class="container">
        <Header />
        <router-view />
    </div>
</template>

<script setup>
import { reactive, computed, provide } from 'vue';
import Header from '@/components/Header.vue';

const states = reactive({
    todoList: [
        { id: 1, todo: 'ES6학습', desc: '설명1', done: false },
        { id: 2, todo: 'react학습', desc: '설명2', done: false },
        { id: 3, todo: 'contextAPI학습', desc: '설명3', done: true },
        { id: 4, todo: '야구경기 관람', desc: '설명4', done: false },
    ],
});

const addTodo = ({ todo, desc }) => {
    states.todoList.push({ id: new Date().getTime(), todo, desc, done: false });
};

// todo를 추가하는 메소드, todo와 desc가 들어있는 객체를 구조 분해 할당으로 받음
const updateTodo = ({ id, todo, desc, done }) => {
    let index = states.todoList.findIndex((todo) => todo.id === id);
    states.todoList[index] = { ...states.todoList[index], todo, desc, done };
};

// todo를 삭제하는 메소드, 해당 id의 todo를 찾아서 삭제
const deleteTodo = (id) => {
    let index = states.todoList.findIndex((todo) => todo.id === id);
    states.todoList.splice(index, 1);
};

//todo의 done을 true -> false, false -> true로 변경해주는 메소드
const toggleDone = (id) => {
    let index = states.todoList.findIndex((todo) => todo.id === id);
    states.todoList[index].done = !states.todoList[index].done;
};

// provide로 하위 컴포넌트에서 사용 가능하도록 제공해줌
provide(
    'todoList',
    //computed로 감싸주면 반응성과 읽기전용 유지
    computed(() => states.todoList)
);
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
</script>
