document.getElementById("text-input").addEventListener("input",function(){
    let length = document.getElementById("text-input").value.length;
    document.getElementById("char-count").innerText=length;
    document.getElementById("char-left").innerText=100-length;
});
