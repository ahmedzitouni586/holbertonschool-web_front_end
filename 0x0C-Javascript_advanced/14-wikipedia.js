function createElement(data) {
    let p = document.createElement("p");
    p.document.createTextNode(data);
    document.body.innerHTML += p;
}

let queryWikipedia = function() {
    let response;
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            response = JSON.parse(request.response).query.pages[21721040].extract;
            createElement(response);
        }
    }
};

queryWikipedia(createElement);
