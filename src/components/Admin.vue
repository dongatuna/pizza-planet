<template>
    <div>
        <section v-if="currentUser">
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
                    <tbody v-for="item in getMenuItems" :key="item['.key']">
                        <tr>
                            <td>{{item.name}}</td>
                            <td><button class="btn btn-outline-danger btn-sm"
                                @click="removeMenuItem(item['.key'])">x</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <h3>Current Orders: {{numberOfOrders}}</h3>
                <table class="table table-sm"  v-for="(orders, index) in getOrders" :key="orders['.key']">
                    <thead class="thead-default">
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div class="order-number">
                            <strong><em>Order Number: {{index+1}}</em></strong>
                            <button class="btn btn-outline-danger btn-sm"
                                @click="removeOrderItem(orders['.key'])">x</button>
                        </div>
                        <tr v-for="orderItems in orders['.value']">
                            <td>{{orderItems.name}}</td>
                            <td>{{orderItems.size}}</td>
                            <td>{{orderItems.quantity}}</td>
                            <td>{{orderItems.price | currency}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        </section>
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
import {mapGetters} from "vuex";
import { dbMenuRef } from '../firebaseConfig';
import { dbOrdersRef } from '../firebaseConfig';
export default {
    components:{
        "pp-newpizza":NewPizza,
        "pp-login":Login
    },
    computed:{
         ...mapGetters ([
             'getMenuItems',
             'numberOfOrders',
             'getOrders',
             'currentUser'
         ])
        // getMenuItems(){
        //     return this.$store.state.menuItems
        // },
        // numberOfOrders(){
        //     return this.$store.getters.numberOfOrders
        // }
    },

    methods:{
        removeMenuItem(key){
            //getMenuItems.splice(indexOf(value), 1)
            dbMenuRef.child(key).remove()
        },
        removeOrderItem(key){
            //getMenuItems.splice(indexOf(value), 1)
            dbOrdersRef.child(key).remove()
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

<style>
.order-number {
    margin: 10px 0;
}
</style>
