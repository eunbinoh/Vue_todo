<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo(){
            localStorage.clear();
        }
    }
}
</script>

<style>
 .clearAllContainer{
     width: 23rem;
     height: 35px;
     line-height: 35px;
     background-color: grey;
     border-radius: 5px;
     margin: 100px auto;
 }
 .clearAllBtn{
     color: white;
     vertical-align: middle;
     cursor: pointer;
 }
</style>