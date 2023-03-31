var caixa=document.querySelector("#caixa")
var data= new Date()
var hour = data.getHours()
var min = data.getMinutes()
var second = data.getSeconds()
var relog = document.createElement('p')
relog.textContent=`${hour}:${min}:${second}`
caixa.appendChild(relog)

function autualizar() {
    
        data=new Date()
        hour= data.getHours()
        min=data.getMinutes()
        second= data.getSeconds()
        relog.textContent=`${hour}:${min}:${second}`
        setTimeout(autualizar,999)
    
}