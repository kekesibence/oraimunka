let felhasznaloHiba = true;
let jelszoHiba = true;
let jelszoUjraHiba = true;

function felhasznalo() {
    let felhasznaloKarakter = document.getElementById("nev").value.length;
    let felhasznaloKiirat = document.getElementById("nevSzamlalo");
    let felhasznaloMezo = document.getElementById("felhasznaloMezo");
    felhasznaloKiirat.innerHTML = `${felhasznaloKarakter}/20`

    if (felhasznaloKarakter < 20) {
        felhasznaloMezo.classList.remove("error")
        felhasznaloHiba = true
    } else {
        felhasznaloHiba = false
        felhasznaloMezo.classList.add("error")
    }
}
function jelszo() {
    let jelszoKarakter = document.getElementById("jelszo").value.length;
    let jelszoKiirat = document.getElementById("jelszoSzamlalo");
    let felhasznaloMezo = document.getElementById("jelszoMezo");

    jelszoKiirat.innerHTML = `${jelszoKarakter}/8`

    if  (jelszoKarakter < 7) {
        jelszoMezo.classList.add("error")
        jelszoHiba = false
    } else {
        jelszoMezo.classList.remove("error")
        jelszoHiba = true
    }
}
function jelszoUjra() {
    let jelszoElso = document.getElementById("jelszo").value;
    let jelszoMasodik = document.getElementById("jelszoUjra").value;
    let jelszoEllenorzesMezo = document.getElementById("jelszoEllenorzo");

    if(jelszoElso != jelszoMasodik) {
        jelszoEllenorzesMezo.classList.add("megjelenve")
        jelszoEllenorzoMezo.classList.add("error")
        jelszoUjraHiba = false

    } else {
        jelszoEllenorzesMezo.classList.remove("megjelenve")
        jelszoEllenorzoMezo.classList.remove("error")
        jelszoUjraHiba = true
    }
}

function regisztracioEllenor() {
    let sikeresReg = document.getElementById("sikeresReg")
    console.log(felhasznaloHiba)
    console.log(jelszoHiba)
    console.log(jelszoUjraHiba)
    if (felhasznaloHiba == true && jelszoHiba == true && jelszoUjraHiba == true) {
        console.log("jovagyok")
        setTimeout(() => {
            sikeresReg.classList.add("megjelenve")
        }, 2000); 
    }
}

function init() {
    document.getElementById("nev").addEventListener("input", felhasznalo)
    document.getElementById("jelszo").addEventListener("input", jelszo)
    document.getElementById("jelszoUjra").addEventListener("focusout", jelszoUjra)
    document.getElementById("submit").addEventListener("click", regisztracioEllenor)

}

document.addEventListener("DOMContentLoaded",init)