import { ref } from "vue"
import { db } from "../firebase/config"


let getPosts=()=>{


    let myposts = ref ([])
    let error = ref("")

    let load=async()=>{

      try{
        // await new Promise((resolve,reject)=>{
        //   // resolve ();
        //   setTimeout(resolve,3000)
        // })
        
        // let response = await fetch("http://localhost:3000/myposts")
        //   if (response.status===404){
        //     throw new Error("not found UR URL");
        //   }

        // let datas = await response.json()
        //   myposts.value=datas

        let res = await db.collection("myposts").get()
            myposts.value=res.docs.map((doc)=>{
              return {id:doc.id, ...doc.data()}
              // console.log(...doc.data())
            })


      }catch(err){
        // console.log(error.message)
        error.value=err.message;
      }

    }

    return {myposts,error,load};

}
export default getPosts;