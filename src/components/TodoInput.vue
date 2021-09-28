<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="What I have to Do?" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newTodoItem:''
            }
        },
        methods:{
            addTodo(){
                if(this.newTodoItem!==""){
                    var val = this.newTodoItem && this.newTodoItem.trim();
                    localStorage.setItem(val, "input: "+val);
                    this.clearInput();
                }
            },
            clearInput(){
                this.newTodoItem='';
            }
        }
    }
</script>

<style scoped>
 input:focus{
    outline: none;
 }
 .inputBox{
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
 }
 .inputBox input{
    border-style: none;
    font-size: 1.5rem;
    vertical-align: middle;
 }
 .addContainer {
    float: right;
    background: linear-gradient(to right, #a26fc4, #8143bb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
 }
 .addBtn{
    color: whitesmoke;
    vertical-align: middle;
 }
</style>