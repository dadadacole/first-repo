<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <span class="navbar-brand ps-2">Todolist App</span>
        <button class="navbar-toggler" type="button" @click="isNavShow = !isNavShow">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="isNavShow ? ' collapse navbar-collapse show' : 'collapse navbar-collapse'">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/members">TodoList</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue';
const isNavShow = ref(false);
</script>
