let tags=[
        "web dev",
        "vue.js",
        "laravel",
        "js",
        "news",
        "java",
        "css",
        "html",
        "vue.js",
        "laravel"
    ];


let uniqueTags = tags.filter((tag,index,array)=>{
    return array.indexOf(tag)===index
})

console.log(uniqueTags);