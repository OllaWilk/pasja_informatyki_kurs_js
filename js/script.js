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

