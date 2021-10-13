let container = document.getElementById('container');


function getResult() {
    var userNumber = document.getElementById('userNumber').value
    if (userNumber >= 80 && userNumber <= 100) {
        let text = document.createTextNode("Your Grade A+");
        let h2 = document.createElement('h2');
        h2.appendChild(text);
        container.appendChild(h2);
    } else if (userNumber >= 70 && userNumber < 80) {
        let text = document.createTextNode("Your Grade A");
        let h2 = document.createElement('h2');
        h2.appendChild(text);
        container.appendChild(h2); 
    } else if (userNumber >= 60 && userNumber < 70) {
        let text = document.createTextNode("Your Grade B");
        let h2 = document.createElement('h2');
        h2.appendChild(text);
        container.appendChild(h2); 
    } else if (userNumber >= 50 && userNumber < 60) {
        let text = document.createTextNode("Your Grade C");
        let h2 = document.createElement('h2');
        h2.appendChild(text);
        container.appendChild(h2); 
    } else if (userNumber >= 1 && userNumber < 50) {
        let text = document.createTextNode("Your Grade Fail");
        let h2 = document.createElement('h2');
        h2.appendChild(text);
        container.appendChild(h2); 
    } 
}


