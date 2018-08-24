<template>
     <div class="row">
         <form action="">
             <div class="form-group">
                <label for="email" >Email address:</label>            
                <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>

            <div class="form-group">
                <label for="password" >Password:</label>            
                <input type="password" class="form-control" id="password" placeholder="Enter password">
            </div>

            <button type="button" class="btn btn-primary" v-on:click.prevent ="signIn">Sign in</button>
            <button type="button" class="btn btn-danger" v-on:click.prevent ="signOut">Sign out</button>
         </form>            
        </div>
</template>

<script>

import Firebase from 'firebase';

    export default {
        methods:{
            signIn(){
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;

                Firebase.auth().signInWithEmailAndPassword(email, password).catch(error=>{
                    let errorCode = error.code;
                    let errorMessage = error.message;

                    if(errorCode === 'auth/wrong-password'){
                        alert("Wrong password");
                    }else{
                        alert(errorMessage);
                    }
                });
            },
            signOut(){
                Firebase.auth().signOut().then(function(){
                    alert("logged out");
                }).catch(error =>{
                    alert('error.')
                });
            }
        }
    }
</script>
