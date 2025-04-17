document.getElementById("print-btn").addEventListener("click",function(){
    let num = Number(document.getElementById("limit").value);
    const div = document.getElementById("result-area");
    div.innerHTML="";
    for(let i=1;i<=num;i++){
        const li=document.createElement("li");
        li.innerText=`${i}`;
        div.appendChild(li);
    }
});