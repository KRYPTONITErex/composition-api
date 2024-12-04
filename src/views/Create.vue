<template>

    <h1>VUE .vue</h1>
  
    <form @submit.prevent="addPost">
      <div class="form-group">
        <label>Title:</label>
        <input type="text" required v-model="title">
      </div>
  
      <div class="form-group">
        <label>Body:</label>
        <textarea required v-model="body"></textarea>
      </div>
  
      <div class="form-group">
        <label>Tags (hit enter to add a tag):</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
      </div>

      <div v-for="tag in tags" :key="tag" class="pill">
        {{ tag }}
      </div><BR></BR>

      <button>ADD POST</button>
    </form>

</template>
  
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { db,timestamp } from '../firebase/config';

  export default {
    setup(){
        let router = useRouter();
      

        let title = ref ("")
        let body = ref ("")
        let tag = ref ("")
        let tags = ref ([])
        

        let handleKeydown = ()=>{
            // alert('handle keydown')
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value=""
        }

        let addPost = async()=>{
          let newmyPost = {
            title:title.value,
            body:body.value,
            tags:tags.value,
            created_at:timestamp()
          }
          let res = await db.collection("myposts").add(newmyPost)
            console.log(res)
          //  await fetch('http://localhost:3000/myposts',{
          //   method:"POST",
          //   headers:{
          //       'Content-type':"application/json"
          //   },
          //   body:JSON.stringify(
          //       {
          //           title:title.value,
          //           body:body.value,
          //           tags:tags.value
          //       }
          //   )
          //  })

           //refirect user home page
           router.push("/")
           
        }

        return { title, body, tag, handleKeydown, tags, addPost }
    }
  };
</script>
  
<style scoped>
  /* General form styling */
  form {
    max-width: 500px;
    margin: auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center all child elements */
  }
  
  /* Form group styling */
  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center labels and inputs */
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    color: #555;
    margin-bottom: 5px;
    text-align: center; /* Center text inside the label */
  }
  
  input[type="text"],
  textarea {
    width: 90%;
    max-width: 400px; /* Constrain input width */
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f8f9fa;
    outline: none;
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }
  
  textarea {
    resize: none;
    height: 100px;
  }
  
  /* Heading */
  h1 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  /* Body alignment */
  body {
    background-color: #f9fafb;
    font-family: 'Arial', sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
  }

  .pill{
    display: inline-block;
    align-items: flex;
    margin: 10px 10px 0 0;
    color: #555;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }

</style>