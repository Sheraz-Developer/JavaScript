document.getElementById("alertName").onclick = function (){

    let fullname = "Muhammad sheraz"

    alert(fullname)
    
    let statement = "alert('Muhammad Sheraz')"
    document.getElementById("statement").innerHTML = statement
}
document.getElementById("alertNum").onclick = function (){

    alert(12345)
    
    let statement = "alert('12345')"
    document.getElementById("statement").innerHTML = statement 
}
document.getElementById("varName").onclick = function (){
    
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain numbers, letters, doller signs, and underscores.</li><li>Through a variable name can't be any of JavaScripts keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal.</li></ul>"
    document.getElementById("output").innerHTML = html;
}
document.getElementById("camelCase").onclick = function (){
    
    let html = "<h3>Examples></h3><br><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
    document.getElementById("output").innerHTML = html;
}   
document.getElementById("sum").onclick = function (){
    let num1 = 10;
    let num2 = 2;
    let sum = 10 + 2;
document.getElementById("output").innerHTML = sum
    let statement1 = "num1 = 10;<br>num2 = 2;<br>sum = num1 + num2"
document.getElementById("statement").innerHTML = statement1;
}
document.getElementById("sub").onclick = function (){
    let num1 = 10;
    let num2 = 2;
    let sub = 10 - 2;
document.getElementById("output").innerHTML = sub
    let statement2 = "num1 = 10;<br>num2 = 2;<br>sum = num1 - num2"
document.getElementById("statement").innerHTML = statement2;
}
document.getElementById("mul").onclick = function (){
    let num1 = 10;
    let num2 = 2;
    let mul = 10 * 2;
document.getElementById("output").innerHTML = mul
    let statement3 = "num1 = 10;<br>num2 = 2;<br>sum = num1 * num2"
document.getElementById("statement").innerHTML = statement3;
}
document.getElementById("div").onclick = function (){
    let num1 = 10;
    let num2 = 2;
    let div = 10 / 2;
document.getElementById("output").innerHTML = div
    let statement4 = "num1 = 10;<br>num2 = 2;<br>sum = num1 / num2"
document.getElementById("statement").innerHTML = statement4;
}
document.getElementById("cal").onclick = function (){
    let num1 = 10;
    let num2 = 2;
    let cal = 36/6*3+2**4-(3+5);
document.getElementById("output").innerHTML = cal
    let statement5 = "let some Calculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);"
document.getElementById("statement").innerHTML = statement5;
}
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerHTML = ""
}