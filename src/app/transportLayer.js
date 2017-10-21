export function request(url, options, callback) {
    fetch(url, options).then(function(data) {
        return data.json();
    }).then(function(response) {
        callback(response)        
    })
}