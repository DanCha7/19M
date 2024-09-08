<script setup>

</script>

<template>
    <header class="header">
        <div class="header__content">
            <div class="template__Logo">
                <router-link to="/">
                    <img class="logof" src="./images/0Logo.png" alt="">
                </router-link>
                <h2>O! Book.ru</h2>
            </div>
            <router-link to="/watch">About Us</router-link>
            <a href="">Login</a>
        </div>
    </header>
</template>
<style scoped>
.template__Logo {
    display: flex;
    align-items: center;
}

ul {
    display: flex;
    gap: 50px;
}
.logof {
    width: 50px;
}
.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 1rem rgb(157, 157, 157);
    background-color: rgb(234, 234, 234);
    backdrop-filter: blur(1px);
    padding: 20px;
    border-radius: 40px;
}
</style>
