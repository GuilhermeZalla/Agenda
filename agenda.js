var valor = 400;
var mes = valor/12;

switch(mes){
    case mes >= 30 && mes < 60:
        console.log("1 mes(es)");
    break;
    case mes >= 60 && mes < 90:
        console.log("2 mes(es)");
    break;
    case mes >= 90 && mes < 120:
        console.log("3 mes(es)");
    break;
}