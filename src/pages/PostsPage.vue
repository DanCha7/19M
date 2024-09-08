<script setup>
import "/src/null.css"
</script>


<template>
    <div class="About__slide">
        <h1>O Book !</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem mollitia cum temporibus consectetur! Tenetur unde tempora illum cumque, sunt aliquid porro praesentium culpa ut adipisci quaerat cum facere debitis.</span>
        <br>
        <br>
        <router-link class="un__last" to="/">Назад</router-link>
    </div>
</template>

<style scoped>
.un__last {
    background: rgb(202, 202, 202);
    padding: 10px;
    border-radius: 20px;
}
.About__slide {
    text-align: center;
}
</style>
