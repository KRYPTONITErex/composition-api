<template>
  <h1>Real Time Page</h1>

  <div v-for="mypost in myposts" :key="mypost.id">
    <div>
        <h2>{{ mypost.title }}</h2>
        <p>{{ mypost.body }}</p><hr>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { db } from '../firebase/config';
export default {
    setup(){
        let myposts = ref ([]);
        db.collection("myposts").orderBy("created_at","desc").onSnapshot((snap)=>{
            // console.log(snap.docs)
            myposts.value = snap.docs.map((doc)=>{

                return {...doc.data(),id:doc.id}
                // console.log(doc.data())

            })
        })

        return { myposts }

    }

}
</script>

<style>

</style>