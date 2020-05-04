/*ZADANIE 1 zegar*/

function odliczanie() {

    let dzisiaj = new Date();

    let dzien = dzisiaj.getDate();
    let miesiac = dzisiaj.getMonth()+1;
    let rok = dzisiaj.getFullYear();

    let godzina = dzisiaj.getHours();
    if(godzina<10) godzina = "0" + godzina;

    let minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta = "0" + minuta;

    let sekunda = dzisiaj.getSeconds();
    if(sekunda<10) sekunda = "0" + sekunda;

    document.getElementById("zegar").innerHTML =
    dzien + " / " + miesiac + " / " + rok + " | " + godzina + ":" + minuta + ":" + sekunda;
    setTimeout("odliczanie()", 1000);
}

/*ZADANIE 2 sprawdzanie liczby*/

function sprawdz () {
    let liczba = document.getElementById("pole").value;

    if (liczba >0) document.getElementById("wynik").innerHTML="dodatnia";
    else if (liczba <0 ) document.getElementById("wynik").innerHTML="ujemna";
    else if (liczba == 0 ) document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="to nie jest liczba";

}

/*ZADANIE 3 pokazanie ciągu cyfr zaczynając od pole po lewej do prawej*/

function wypisz() {

    let liczba1 = document.getElementById("poleMniejszaLiczba").value;
    let liczba2 = document.getElementById("poleWiekszaLiczba").value;
    let napis = '';

    for(i= liczba1; i <=liczba2; i ++) {
        napis = napis + i + ' ';
    }

    if(liczba1>liczba2) document.getElementById('wynikDwa').innerHTML="liczba pierwsza musi być większa od liczby drugiej";
    else if (liczba1 == liczba2) document.getElementById('wynikDwa').innerHTML = "liczby są równe";
    else document.getElementById('wynikDwa').innerHTML = napis;

}

/*ZADANIE 4 slider*/
var numer = Math.floor(Math.random()*5)+1;


function zmienslajd()
    {
        numer++; if (numer>5) numer=1;

        var plik = "<img src=\"images/slajd" + numer + ".jpeg\" />";

        document.getElementById("slider").innerHTML = plik;
        $("#slider").fadeIn(500);

        timer1 = setTimeout("zmienslajd()", 5000);
        timer2 = setTimeout("schowaj()", 4500);

    }

zmienslajd();