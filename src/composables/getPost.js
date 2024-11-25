const { ref } = require("vue");

let getPost=(id)=>{

    let mypost = ref(null)
    let error = ref("")

    let load = async ()=>{

        try{
            let response = await fetch ("http://localhost:3000/myposts/"+ id );
            if(response.status===404){
                throw new Error ("NOT FOUND UR ONE ...")
            }
            let datas = await response.json()
            mypost.value=datas
        }
        catch(err){
            error.value=err.message;
        }
    }

    return {mypost,error,load}

}

export default getPost;