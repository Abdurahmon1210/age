var num = +prompt('Yoshingizni kiriting')
if(num > 0 && num <= 18){
    alert("Yoshsiz.O'qishingiz kerak")
}else if(num > 18 && num <= 50){
    alert("Ishlashingiz kerak")
}else if(num > 50 && num <= 59){
    alert("Yaqinda pensiyaga chiqasiz")
}else if(num > 59 && num <= 150){
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)")
}else{
    alert("Nimadir noto'g'ri ketib qoldi :(")
}