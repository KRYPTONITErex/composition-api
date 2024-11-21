<template>
  
<h2>{{ mypost.title }}</h2>

<p>{{ cutBody }}</p>

</template>

<script>
import { computed } from 'vue';

export default {
    props:["mypost"],
    setup(props){
        let cutBody = computed(()=>{
            return props.mypost.body.substring(0,150)+"..."
        })

        return {cutBody}
    }

   

}
</script>

<style>

</style>