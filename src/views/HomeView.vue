<template>
  <div class="home">
    
    <h1>Person One</h1>
    <p>{{ personOne.name }} {{ personOne.age }}</p>
    <p>{{ personOne }}</p>

    <button @click="changeOne">Click</button>

    <h1>Person Two</h1>
    <p>{{ personTwo.name }} {{ personTwo.age }}</p>
    <p>{{ personTwo }}</p>

    <button @click="changeTwo"> Change Two </button> <br><br>

    <h3>user one = {{ user1 }} & user two = {{ user2 }}</h3>

    <button @click="change1">ChangeOne</button> - 
    <button @click="change2">ChangeTwo</button>

  </div>
</template>

<script>
import { reactive, ref } from 'vue';



export default {

  setup(){

    let personOne = ref({name:"kyaw",age:30});

    let changeOne=()=>{
      personOne.value.name = "Lwin";
      // console.log(personOne.value.name)
    }


    let personTwo = reactive({name:"Maung", age:33});

    let changeTwo = ()=>{
      personTwo.name="Changed Maung"
    }

    let user1 = ref("Lwin Phyo")
    let user2 = ref("Khaing Zar")

    let change1 = ()=>{
      user1.value="ChangeLwin"
    }

    let change2 = ()=>{
      user2.value = "Change KZL"
    }

    return {personOne,changeOne,personTwo,changeTwo,user1,user2,change1,change2}

  }
 
}
</script>
