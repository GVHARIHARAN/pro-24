const btn = document.getElementById('btn');
const wrap = document.getElementById('wrap');
const h3 = document.getElementById('h3');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function color() {
    let hextag = '#'

    for (let i = 1; i <= 6; i++) {
        hextag += randcolor()
        

    }
    // wrap.style.backgroundColor=hextag;
    h3.innerText=hextag;


}

function randcolor() {

    let rand = Math.floor(Math.random() * 16);
    return hex[rand]
}