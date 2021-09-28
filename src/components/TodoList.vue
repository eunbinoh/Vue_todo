<template>
    <section>
        <ul>
            <li v-for="todoItem in todoItems">{{ todoItem }}</li>
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
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: center;
        font-size: 1.3rem;
    }
    li {
        display: flex;
        min-height: 40px;
        height: 40px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0 0 10%;
        background: white;
        border-radius: 5px;
    }
</style>