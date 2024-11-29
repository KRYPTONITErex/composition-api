<template>
<div class="post">

    <router-link :to="{name:'detail',params:{id:mypost.id}}">
        <h2 class="pt">{{ mypost.title }}</h2>
    </router-link>
  
    <p>{{ cutBody }}</p>

    <div v-for="tag in mypost.tags" :key="tag" class="pill">
        <router-link :to="{name:'Tag',params:{tag}}">{{ tag }}</router-link>
    </div>

</div>
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

<style scoped>
.post{
    width: 500px;
}

.post h2{
    margin-top: 0px;
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: rgb(225, 255, 255);
    margin-bottom: 10px;
    max-width: 400px;
}

.post h2::before{
    margin-left: 30px;
    content: "";
    display: block;
    width: 130%;
    height: 120%;
    background: #ff2f00;
    position: absolute;
    z-index: -1;
    padding-right: 30px;
    left: -50px;
    transform: rotateZ(-5deg);
    border-radius: 10px;
}

.pt{
    padding-left: 15px;
}

.pill{
    display: inline-block;
    align-items: flex;
    margin: 10px;
    color: #0e4434;
    background: #ffed68;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
}
</style>