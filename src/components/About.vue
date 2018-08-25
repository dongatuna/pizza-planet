<template>
<div>
    <p>Click on the link below for more information...</p>
    <nav class="navbar navbar-toggleable-md navbar-light">
            
        <ul class="navbar-nav">
            <router-link v-bind:to="{name: 'historyLink'}" tag="li"><a class="nav-link">our history</a></router-link>
            <router-link v-bind:to="{name: 'contactLink'}" tag="li"><a class="nav-link">contact us</a></router-link>
            <router-link v-bind:to="{name: 'deliveryLink'}" tag="li"><a class="nav-link">delivery</a></router-link>
            <router-link v-bind:to="{name: 'orderingGuideLink'}" tag="li"><a class="nav-link">ordering guide</a></router-link>
            
        </ul>
    </nav>
    <router-view></router-view>
</div>
</template>
