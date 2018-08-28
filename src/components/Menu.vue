<template>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button class="btn btn-sm btn-outline-success"
                             v-on:click="addToBasket(item, option)" type="button">+</button></td>
                    </tr>
                </tbody>

            </table>
        </div>
        <!--shopping basket-->
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length>0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket">
                        <tr>
                            <td><button class="btn btn-sm" 
                                        type="button"
                                        v-on:click="decreaseQuantity(item)">-</button> 
                                <span>{{item.quantity}}-</span>
                                <button class="btn btn-sm" 
                                        type="button"
                                        v-on:click="increaseQuantity(item)">+</button>
                            </td>     
                            <td>{{item.name}} {{item.size}}</td>     
                            <td>{{item.price * item.quantity}}</td>                 
                        </tr>                
                    </tbody>
                </table>
                <p>Order total: </p>
                <button class="btn btn-success btn-block" v-on:click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                <p>{{basketText}}</p>{{this.$store.state.orders}}
            </div>

        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
    data(){
       return {
           basket:[],
           basketText:"Your basket is empty"                 
       }
    },

    //how to get data from the store
    computed:{

        ...mapGetters([
            "getMenuItems"
        ])
        // getMenuItems(){
        //     //---getting data using the state -- you bring entire data to the component
        //     //return this.$store.state.menuItems

        //     //---getting data using getter --you bring filtered data to the component
        //     return this.$store.getters.getMenuItems
        // }
    },
    methods:{
        addToBasket(item, option){
            //check if the item is already in the basket
            //console.log(this.basket.length);
            const exists = this.basket.includes(item)
            console.log('this is the length of the basket', this.basket.length);
            console.log('this is what is in the basket', this.basket)

            console.log('does it exits?', exists)
            //if it is increment quantity

            //if not, push the entire item
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity:1
            })

           
        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item), 1);
        },
        decreaseQuantity(item){
            item.quantity--;
            if(item.quantity===0){
                this.removeFromBasket(item);
            }
        },
        increaseQuantity(item){
            item.quantity++;
        },
        addNewOrder(){
            this.$store.commit('addOrder', this.basket)
            this.basket = []
            this.basketText = "The order has been placed"
        }
    }
}
</script>

