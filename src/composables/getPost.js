
const { ref } = require("vue");

import {db} from "../firebase/config"

let getPost=(id)=>{

    let mypost = ref(null)
    let error = ref("")

    let load = async ()=>{

        try{
            // await new Promise((resolve,reject)=>{
            //     setTimeout(resolve,3000)
            // })
            
            // let response = await fetch ("http://localhost:3000/myposts/"+ id );
            // if(response.status===404){
            //     throw new Error ("NOT FOUND UR ONE ...")
            // }
            // let datas = await response.json()
            // mypost.value=datas

            // console.log(id)

            let doc = await db.collection("myposts").doc(id).get()
            mypost.value = {id:doc.id,...doc.data()}
            // console.log(doc.id)



        }
        catch(err){
            error.value=err.message;
        }
    }

    return {mypost,error,load}

}

export default getPost;