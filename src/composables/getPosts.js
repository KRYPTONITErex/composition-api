import { ref } from "vue"

let getPosts=()=>{


    let myposts = ref ([])
    let error = ref("")

    let load=async()=>{

      try{
        let response = await fetch("http://localhost:3000/myposts")
          if (response.status===404){
            throw new Error("not found UR URL");
          }

        let datas = await response.json()
          myposts.value=datas

      }catch(err){
        // console.log(error.message)
        error.value=err.message;
      }

    }

    return {myposts,error,load};

}
export default getPosts;