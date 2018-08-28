<template>
    <header class="row">
        <nav class="navbar  navbar-expand-md navbar-light">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <ul class="navbar-nav">
                <router-link v-bind:to="{name: 'homeLink'}" tag="li"><a class="nav-link">home</a></router-link>
                <router-link v-bind:to="{name: 'menuLink'}" tag="li"><a class="nav-link">menu</a></router-link>
                
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
       
    }
}
</script>


<style> 
    header{
        margin-bottom: 20px;

    }
    .navbar-brand{
        font-size: 1.5em;
    }
</style>
