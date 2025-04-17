document.getElementById("add").addEventListener("click",function(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    modifyResult(num1+num2);
});
document.getElementById("sub").addEventListener("click",function(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    modifyResult(num1-num2);
});
document.getElementById("mul").addEventListener("click",function(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    modifyResult(num1*num2);
});
document.getElementById("div").addEventListener("click",function(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    modifyResult(num1/num2);
});

function modifyResult(result){
    document.getElementById("result").innerText=result;
}