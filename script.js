//Create event listener
document.getElementById('getQuote').addEventListener('click', loadText);

function loadText() {
    //Create the XHR object
    var xhr = new XMLHttpRequest();
    // .open(method, url/file, async)
    xhr.open('GET', 'https://talaikis.com/api/quotes/random/', true);
    xhr.open
    xhr.onload = function() {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText); // JSON.parse translates the object
            var quote = "";
            quote += '"' + data.quote + '"' + '<br>' + ' -' + data.author;
            document.getElementById('quote').innerHTML = quote;
        }
    }
    xhr.onerror = function() {
        console.log('Request Error...')
    }
    //Sends request
    xhr.send();
}
// Http status
// 200: 'Ok'
// 403: 'Forbidden'
// 404: 'Not Found'
