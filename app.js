
var numbrsDOM = document.querySelectorAll(".nmbrs")
var optDOM = document.querySelectorAll(".opt")
var screenDOM = document.querySelector("h1");
var equalDOM = document.querySelector(".equal")
var clearDOM = document.querySelector(".clear")

var son_ekran = "";
var son_sayi = "";
var all = [];


numbrsDOM.forEach(element => {
    element.addEventListener("click", () => {
        if (son_sayi == "" && element.textContent == "0") {

        } else {
            son_sayi += element.textContent
            son_ekran += element.textContent
            screenDOM.textContent = son_ekran;
            console.log(son_sayi)
        }
    })
});

//CLEAR
clearDOM.addEventListener("click", () => {
    all = [];
    son_ekran = "";
    son_sayi = "";
    screenDOM.textContent = "";
})

optDOM.forEach(element => {
    element.addEventListener("click", () => {
        all.push(son_sayi);
        console.log(son_sayi);
        if (son_sayi === "" || all[all.length - 1] == "*" || all[all.length - 1] == "/" || all[all.length - 1] == "+" || all[all.length - 1] == "-") {
            all.pop()
        }
        else {
            son_ekran += " " + element.textContent + " "//ekran için
            screenDOM.textContent = son_ekran; //ekran için
            all.push(element.textContent);
            son_sayi = ""; //son sayı sıfırlamaca
            console.log(all)
        }
    })
});


//equal
equalDOM.addEventListener("click", () => {
    if (son_sayi != "") {
        son_ekran += " " + " = ";//ekran için
        screenDOM.textContent = son_ekran; //ekran için
        var varMiCarpim = all.indexOf("*");
        var varMiBolme = all.indexOf("/");
        var varMiToplam = all.indexOf("+");
        var varMiCikarma = all.indexOf("-");

        //en son sayıyı listeye ekle
        all.push(son_sayi);
        son_sayi = "";
        while (true) {
            var varMiCarpim = all.indexOf("*");
            var varMiBolme = all.indexOf("/");
            var varMiToplam = all.indexOf("+");
            var varMiCikarma = all.indexOf("-");
            if (varMiCarpim != -1) {
                console.log(all)
                var sonuc = parseInt(all[varMiCarpim - 1]) * parseInt(all[varMiCarpim + 1])
                console.log(sonuc)
                console.log(all)
                all[varMiCarpim - 1] = sonuc
                all.splice(varMiCarpim, 2);
                console.log(all)
            }
            else if (varMiBolme != -1) {
                var sonuc = parseInt(all[varMiBolme - 1]) / parseInt(all[varMiBolme + 1])
                console.log(sonuc)
                console.log(all)
                all[varMiBolme - 1] = sonuc
                all.splice(varMiBolme, 2);

                console.log(all)
            }
            else if (varMiCikarma != -1) {
                all[varMiCikarma + 1] = -(parseInt(all[varMiCikarma + 1]))
                all.splice(varMiCikarma, 1);
                console.log(all)
            }
            else if (varMiToplam != -1) {
                all.splice(varMiToplam, 1);
            }
            else {
                var toplam = 0;
                all.forEach((element, index) => {
                    all[index] = parseInt(element);
                });
                all.forEach(element => {
                    toplam += element;
                });
                screenDOM.textContent = toplam.toFixed(2);
                all = [];
                son_sayi = "";
                son_ekran = "";
                break
            }
        }
    }
})

