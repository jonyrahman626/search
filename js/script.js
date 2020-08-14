var message = document.querySelector('#message');
var search_word = document.querySelector('#search_word');
var error_message = document.querySelector('#error_message');


search_word.addEventListener("keypress", function () {
    var result = message.value.indexOf(search_word.value);

    if (result === -1) {
        console.log(error_message.innerHTML = `The value of ${search_word.value} was not found`);
    } else {
        error_message.innerHTML = `The value of ${search_word.value} was funnd at ${result}`;
    }


});
