const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example" }),
  // …
});

// get-el küldése a paramétereknek
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);

// request
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myRequest = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});

const response = await fetch(myRequest);

// példa
async function post(request) {
  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

// xmlhttpRequest példa
var feliratkozas = function () {
    var xmlhttp = new XMLHttpRequest();
    var emailInput = document.getElementById("email");
    var adatkezelesiInput = document.getElementById("adatkezelesiInput");

    if (emailInput.value === "") {
        alert("Kérlek, add meg az email címed!");
        return;
    }

    if (adatkezelesiInput.checked === false) {
        alert("Kérlek, fogadd el az adatvédelmi szabályzatot!");
        return;
    }

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            emailInput.value = "";
            alert("Köszönjük, hogy feliratkoztál!");
        }
    };
    xmlhttp.open('POST', '/api/hirlevel');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
        email: emailInput.value,
    }));
};

// görgetés figyelése
mybutton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if ( document.documentElement.scrollTop >= 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// valuta váltó példa

async function api() {
        const call = await fetch("https://latest.currency-api.pages.dev/v1/currencies.json");
        const data = await call.json();

        const v1 = document.getElementById("valutak1");
        const v2 = document.getElementById("valutak2");

        const lista = new Set();

        for (const [kulcs, ertek] of Object.entries(data)) {
            let opt1 = document.createElement("option");
            let opt2 = document.createElement("option");
            opt1.innerHTML = ertek;
            opt1.value = kulcs + " " + ertek;
            opt2.innerHTML = ertek;
            opt2.value = kulcs + " " + ertek;
            if (ertek == "" || lista.has(ertek)) continue;

            lista.add(ertek)
            v1.appendChild(opt1);
            v2.appendChild(opt2)
        }

        ma = new Date();
        const penz = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${ma.getFullYear()}-${pad(ma.getMonth() + 1)}-${pad(ma.getDate())}/v1/currencies/usd.json`);
        const atvaltas = await penz.json();

        const valto = document.getElementById("rate");
        const db2 = document.getElementById("szam2");

        valto.innerHTML = Math.round(atvaltas.usd.huf * 10000) / 10000;
        db2.value = Math.round(atvaltas.usd.huf * 10000) / 10000;

        rajz("usd", "huf");
    }

// kutyás példa

async function valtas() {
            const call = await fetch("https://dogapi.dog/api/v2/breeds",{
                method: "GET",
                body: null,
                headers: {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                }
            });
            const szoveg = await call.json();

            console.log(szoveg.data[0].attributes);
        }
