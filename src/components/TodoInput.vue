<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="What I have to Do?" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return{
                newTodoItem:'',
            }
        },
        methods:{
            create(id, params){
                http
                    .post("../src/App.vue")
                    .then(response => {
                        const { data } = response
                        console.log('create data: ',data)
                    })
                    .catch(error => {
                        alert(error)
                    })
            },
            read(){
                let params = {}
                http
                    .get("../src/components/TodoList.vue", {
                        params : params,
                    })
                    .then(res => {
                        const { data } = res
                        console.log('read data:',data)
                        this.items = data.newTodoItem
                    })
                    .catch(err => {
                        alert(err)
                    })

            },

            addTodo(){
                if(this.newTodoItem!==""){
                    var val = this.newTodoItem && this.newTodoItem.trim();
                    localStorage.setItem(val, "input: "+val);
                    this.clearInput();
                }
            },
            clearInput(){
                this.newTodoItem='';
                this.read();
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
    cursor: pointer;
 }
</style>