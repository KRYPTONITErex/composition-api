<template>
  <h2>Tag Cloud</h2>

  <div class="tagCloud">
    <div v-for="tag in uniqueTags" :key="tag" class="pill">
        <router-link :to="{name:'Tag',params:{tag}}">{{ tag }}</router-link>
    </div>
  </div>

    
</template>

<script>
import { ref } from 'vue';

export default {
    props: ["myposts"],
    setup(props){

        let tags = ref ([]);

        props.myposts.forEach((mypost)=>{
            // console.log(mypost)
            mypost.tags.forEach((tag)=>{
                // console.log(tag)
                tags.value.push(tag);
            })
        })
        // console.log(tags.value);
        let uniqueTags = tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag)===index
        })

        return {uniqueTags}
    }

}
</script>

<style>
.tagCloud {
    display: flex;
    flex-wrap: wrap; /* Ensures tags wrap to the next line */
    gap: 10px; /* Adds space between tags */
    padding: 10px; /* Adds some padding around the container */
    background-color: #f9f9f9; /* Light background for better visibility */
    border: 1px solid #ddd; /* Adds a subtle border */
    border-radius: 8px; /* Softens the edges */
    justify-content: center; /* Centers the tags horizontally */
}

.pill {
    display: inline-block; /* Allows tags to behave like buttons */
    padding: 8px 16px; /* Padding inside the pill */
    background-color: #007bff; /* Blue background color */
    color: white; /* White text */
    font-size: 14px; /* Reasonable font size */
    border-radius: 20px; /* Makes it pill-shaped */
    text-align: center; /* Centers text inside */
    cursor: pointer; /* Adds a pointer cursor */
    transition: all 0.3s ease; /* Smooth transition for hover effect */
}

.pill:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: scale(1.05); /* Slight enlargement on hover */
}

.pill a {
    text-decoration: none; /* Removes underline from links */
    color: inherit; /* Inherits text color from .pill */
}
</style>