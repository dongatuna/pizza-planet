<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>Welcome to Pizza Planet!</h1>
                <h2>Feeling hungry?</h2>
                <button class="btn btn-success" v-on:click="goToMenu">Let's order!</button>
                
            </div>
        </div>

    </div>
</template>

<script>
export default {
    methods:{
        goToMenu(){
            //use router in the home component to go to the menu component
            //the router push methods adds to the browser history
            this.$router.push({name: 'menuLink'});
        }
    }
}
</script>


<style>
    #home{
        background: url('../../src/assets/pizza.jpg');
        height: 800px;
        padding: 10%;
    }

    h1, h2{
        margin: 6%;
    }

    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 60%;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>
