<template>
  <div class="home">

    <input type="text" v-model="search">
    <p>Search items - {{ search }}</p>

    <div v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>

  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {

  setup(){

    let search = ref ("a")

    let names = ref (["Lwin Phyo","Khaing Zar","Mya Phu","May Yamin"])

    let filteredNames = computed (()=>{
      return names.value.filter(name=>{
        return name.includes(search.value)
      })
    })

    return {names,search,filteredNames};

  }
}
</script>
