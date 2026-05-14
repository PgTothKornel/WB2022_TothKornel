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
