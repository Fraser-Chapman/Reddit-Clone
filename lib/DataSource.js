function DataSource(baseURL){
    //set the base URL that all requests will be made to
    this._baseURL = baseURL;
} 

DataSource.prototype = {
    get: function(endpoint, callback) {

        // create new instance of XMLHttpRequest
        const request = new XMLHttpRequest();

        //configure this request to be a GET request to the given endpoint
        request.open('GET', this._baseURL + endpoint);

        // set a request header telling the server that we want JSON data back/returned
        request.setRequestHeader('Content-Type', "application/json;charset=utf-8");

        // this function will be called when the request's "ready state" changes
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200){
                callback(JSON.parse(request.response));
            }
        }
        //once the request has been configured we send it to the server
        request.send();
    },
    post: function(endpoint, newPost, callback){
        const request = new XMLHttpRequest();
        request.open('POST', this._baseURL + endpoint);
        request.setRequestHeader('Content-Type', "applications/json;charset=utf-8");
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 201){
                callback(JSON.parse(request.response));
            }
        }
        
        request.send(JSON.stringify(newPost));
    },

}
