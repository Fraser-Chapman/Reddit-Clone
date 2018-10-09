function DOM(rootElement){
    this._rootElement = document.querySelector(rootElement);
   
}
DOM.prototype = {

    render: function(changes){
        this._rootElement.innerHTML = changes

    }

}
