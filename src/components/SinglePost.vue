<template>
    <h2>{{ post.title }}</h2>

    <p>{{ cutBody }}</p>
</template>

<script>
import { computed } from 'vue';

export default {
    props:["post"],
    setup(props){
        let cutBody = computed(()=>{
            return props.post.body.substring(0,100)+"..."
        })

        return {cutBody}
    }


}
</script>

<style>

</style>