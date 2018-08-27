<template>
    <div>
        <div class=row>
            <div class="col-sm-12 col-md-6">
            <!--new pizza component-->
            <pp-newpizza></pp-newpizza>
            </div>

            <div class="col-sm-12 col-md-6">
                <h3>Menu</h3>
                <table class="table table-hover">
                    <thead class="thead-default">
                        <tr>
                            <th>Item</th>
                            <th>Remove from menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Margherita</td>
                            <td><button class="btn btn-outline-danger btn-sm">x</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <h3>Current Orders: {{numberOfOrders}}</h3>
                <table class="table table-sm">
                    <thead class="thead-default">
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems">
                        <div class="order-number">
                            <strong><em>Order Number: 1</em></strong>
                            <button class="btn btn-outline-danger btn-sm">x</button>
                        </div>
                        <tr v-for="option in item.options">
                            <td>{{item.name}}</td>
                            <td>{{option.size}}</td>
                            <td>1</td>
                            <td>{{option.price}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <hr>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <pp-login></pp-login>
            </div>
        </div>
    </div>
</template>

<script>

import NewPizza from "./NewPizza.vue";
import Login from "./Login.vue";
export default {
    components:{
        "pp-newpizza":NewPizza,
        "pp-login":Login
    },

     computed:{
        getMenuItems(){
            return this.$store.state.menuItems
        },
        numberOfOrders(){
            return this.$store.getters.numberOfOrders
        }
    },
    beforeRouteLeave: (to, from, next)=>{
        if(confirm("Have you remembered to log out")===true){
            next();
        }else next(false);
    }

    // data(){
    //     return{
    //         name:'Don Gatuna'
    //     }
    // },

    // beforeRouteEnter:(to, form, next)=>{        
    //     next(vm=>{
    //         alert("Hello "+ vm.name);
    //     });
    // }
    
}
</script>

