<script setup>
import BookList from "../components/BookList.vue";
import Header from "/src/components/header.vue"
import "/src/null.css"



</script>

<template>
    <Header></Header>
    <div class="container">
        <BookList />
        <footer>
            Created by dan , 2024
        </footer>
    </div>
</template>
<style scoped>

.container {
    padding-top: 120px;
    max-width: 1300px;
    padding: 20px 10px;
    margin: auto;
}
</style>
