function soma(a,b){
	return a + b;
}


function mdc(num1, num2) {

    var resto;

    do {
        resto = num1 % num2;

        num1 = num2;
        num2 = resto;

    } while (resto != 0);

    return num1;
}
  



