<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    {{ resultDate }}
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter> 
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
  },
  data() {
   return {
    insertDatetime: "2022-01-19T08:14:07.000Z",
    updateDatetime: "2022-01-19T08:14:07.000Z",
    remarkTxt: "새해",
    updateUserId: "관리자",
    holiTp: "20",
    insertUserId: "관리자",
    corpCd: "NAURI",
    calTp: "00",
    day: "토",
    paidTp: "10",
    calCd: "00",
    dateDt: "2021-12-31T15:00:00.000Z",
    resultDate: '',
   }
  },
  methods: {
     test(){
        
     }
  },
  created(){

     const monthFirstDay = []; // 시작 요일
     const monthLastDay = [];  //달의 마지막일자


     for(var i=1; i<=12; i++){
        let day = new Date(2022, i, 0).toString().split(' ');
        monthFirstDay.push(day[0]);
        monthLastDay.push(day[2]);
     }

     console.log('monthFirstDay>>>>',monthFirstDay);
     console.log('monthLastDay>>>>',monthLastDay);
     
     const week = ['일', '월', '화', '수', '목', '금', '토'];
     [0][0] [0][1] [0][2] [0][3] [0][4] [0][5] [0][6] 
     [1][0] [1][1] [0][2] [0][3] [0][4] [0][5] [0][6] 
     [2][0] [2][1] [0][2] [0][3] [0][4] [0][5] [0][6] 
     [3][0] [3][1] [0][2] [0][3] [0][4] [0][5] [0][6] 
     [4][0] [4][1] [0][2] [0][3] [0][4] [0][5] [0][6] 
     let dayOfWeek = week[new Date('2022-01-29').getDay()]; 
     
     return dayOfWeek;

  }

}
</script>

<style>
 header{
    font-family: 'Nanum Brush Script', cursive;}
 body{
    font-family: 'Nanum Brush Script', cursive;
    text-align: center;
    background-color: #f6eefd;
 }
 input{
    font-family: 'Nanum Brush Script', cursive;
    border-style: groove;
    width: 200px;
 }
 button{
    border-style: groove;
 }
 .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
 }
</style>
