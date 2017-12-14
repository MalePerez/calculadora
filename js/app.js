
var calculadora = {

}

function reiniciar(elemento){
  elemento.style="width:22%; height:17%";
}
function reiniciar1(elemento){
  elemento.style="width:29%; height:42%";
}
function cambioDeBtn(elemento){
  elemento.style="width:21%; height:16.5%";
setTimeout(function(){reiniciar(elemento)},200);
}
function cambioDeBtn1(elemento){
  elemento.style="width:28.5%; height:41%";
setTimeout(function(){reiniciar1(elemento)},200);
}
function reiniciar2(elemento){
  elemento.style="width:90%; height:98%";
}
function cambioDeBtn2(elemento){
  elemento.style="width:89%; height:96%";
setTimeout(function(){reiniciar2(elemento)},200);
}
window.onload = function(){
pantalla=document.getElementById("display");
}

var on = document.getElementById('on')
on.onclick=function(){  cambioDeBtn(on) };
var por = document.getElementById('por')
por.onclick=function(){  cambioDeBtn(por) };
var menos = document.getElementById('menos')
menos.onclick=function(){cambioDeBtn(menos) };
var sign = document.getElementById('sign')
sign.onclick=function(){  cambioDeBtn(sign) };
var raiz = document.getElementById('raiz')
raiz.onclick=function(){  cambioDeBtn(raiz) };
var dividido = document.getElementById('dividido')
dividido.onclick=function(){  cambioDeBtn(dividido) };
var siete = document.getElementById('7')
siete.onclick=function(){  cambioDeBtn(siete) };
var seis = document.getElementById('6')
seis.onclick=function(){  cambioDeBtn(seis) };
var cinco = document.getElementById('5')
cinco.onclick=function(){  cambioDeBtn(cinco) };
var cuatro = document.getElementById('4')
cuatro.onclick=function(){  cambioDeBtn(cuatro) };
var tres = document.getElementById('3')
tres.onclick=function(){  cambioDeBtn1(tres) };
var dos = document.getElementById('2')
dos.onclick=function(){  cambioDeBtn1(dos) };
var nueve = document.getElementById('9')
nueve.onclick=function(){  cambioDeBtn(nueve) };
var ocho = document.getElementById('8')
ocho.onclick=function(){  cambioDeBtn(ocho) };
var uno = document.getElementById('1')
uno.onclick=function(){  cambioDeBtn1(uno) };
var cero = document.getElementById('0')
cero.onclick=function(){  cambioDeBtn1(cero) };
var suma = document.getElementById('mas')
suma.onclick=function(){  cambioDeBtn2(suma) };
var igual = document.getElementById('igual')
igual.onclick=function(){  cambioDeBtn1(igual) };
var punto = document.getElementById('punto')
punto.onclick=function(){  cambioDeBtn1(punto) };
