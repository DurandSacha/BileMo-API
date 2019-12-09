
require('babel-polyfill');
require('path');
require('jquery');
//require('font-awesome/css/font-awesome.css');

console.log('js actif');

$(document).ready(function() {

    $('.data').click(function() {
        alert("div clicked and Jquery actived");
        this.css( "border", "3px solid red" );
        console.log('jQuery actived');
    });

});
