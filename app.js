function displayClock() {
    let display = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = display;
    setTimeout(displayClock, 1000);
}

displayClock()

function getBoredMsg() {
    let boredReq = new XMLHttpRequest()
    boredReq.open('GET', 'http://www.boredapi.com/api/activity/', true)
    boredReq.onload = function() {
        let data = JSON.parse(this.response)
        if (boredReq.status >= 200 && boredReq.status < 400) {
            document.getElementById('msg').innerHTML = data.activity;
        } else {
            console.log('error')
        }
    }
    boredReq.send()
    document.getElementById('add').style.display = 'flex';
}

function getAdviceMsg() {
    let adviceReq = new XMLHttpRequest()
    adviceReq.open('GET', 'https://api.adviceslip.com/advice', true)
    adviceReq.onload = function() {
        let data = JSON.parse(this.response)
        if (adviceReq.status >= 200 && adviceReq.status < 400) {
            document.getElementById('msg').innerHTML = data.slip.advice;
        } else {
            console.log('error')
        }
    }
    adviceReq.send()
    document.getElementById('add').style.display = 'flex';
}

function getAffMsg() {
    let affReq = new XMLHttpRequest()
    affReq.open('GET', 'https://dulce-affirmations-api.herokuapp.com/affirmation', true)
    affReq.onload = function() {
        let data = JSON.parse(this.response)
        if (affReq.status >= 200 && affReq.status < 400) {
            document.getElementById('msg').innerHTML = data[0].phrase;
        } else {
            console.log('error')
        }
    }
    affReq.send()
    document.getElementById('add').style.display = 'flex';
}

function getGeekMsg() {
    let geekReq = new XMLHttpRequest()
    geekReq.open('GET', 'https://geek-jokes.sameerkumar.website/api?format=json', true)
    geekReq.onload = function() {
        let data = JSON.parse(this.response)
        if (geekReq.status >= 200 && geekReq.status < 400) {
            document.getElementById('msg').innerHTML = data.joke;
        } else {
            console.log('error')
        }
    }
    geekReq.send()
    document.getElementById('add').style.display = 'flex';
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getCatMsg() {
    let catReq = new XMLHttpRequest()
    catReq.open('GET', 'https://cat-fact.herokuapp.com/facts', true)
    catReq.onload = function() {
        let data = JSON.parse(this.response)
        if (catReq.status >= 200 && catReq.status < 400) {
            idx = randomInt(0, 4)
            document.getElementById('msg').innerHTML = data[idx].text;
        } else {
            console.log('error')
        }
    }
    catReq.send()
    document.getElementById('add').style.display = 'flex';
}


// Create new Message object
function Message(msgContent) {
    this.content = msgContent;
}

const storedValue = JSON.parse(localStorage.getItem('savedList'));
const savedpg = storedValue ? storedValue : [];

function addToSavedPage() {
    content = document.getElementById("msg").innerHTML;
    const msg = new Message(content);
    savedpg.push(msg);
    localStorage.setItem('savedList', JSON.stringify(savedpg));
    alert("Added to saved list!");
}