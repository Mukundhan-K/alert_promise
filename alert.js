
function create_promise() {
    return new Promise((resolve)=>{
        resolve("welcome sir.....");
    }
    )
}

let btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    create_promise()
        .then((msg)=>alert(`${msg}`))
        .catch(msg=>console.log(msg))
})





