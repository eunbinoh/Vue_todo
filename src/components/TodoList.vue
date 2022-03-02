<template>
    <section>
        <ul>
            <li v-for="(todoItem,index) in todoItems" :key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                   {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
                   <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return{
            todoItems:[]
        }
    },
    created(){
        if(localStorage.length>0){
            for(var i=0; i<localStorage.length; i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    methods: {
        removeTodo(todoItem,index){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        font-size: 1.3rem;
    }
    li {
        display: flex;
        min-height: 40px;
        height: 40px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0 0 5%;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #8143bb;
        margin-right: 50px;
        left: -10px !important;
        cursor: pointer;
    }
    .removeBtn {
        margin-left: auto;
        padding-right: 20px !important;
        color: grey;
        cursor: pointer;
    }
</style>