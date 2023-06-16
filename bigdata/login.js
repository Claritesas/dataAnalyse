document.querySelectorAll("input")[0].addEventListener("input", function () {
    uname = this.value
})
document.querySelectorAll("input")[1].addEventListener("input", function () {
    pwd = this.value
})
document.querySelector("button").addEventListener("click",function(){
    if (uname === "admin" && pwd === "123456") {
        window.open("main.html")
    }
    else{
        alert("用户名或密码错误")
    }
})
