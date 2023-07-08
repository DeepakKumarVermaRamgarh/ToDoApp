// waiting for document is fully loaded
$(document).ready(function () {

    // fetching data from localstorage of the browser if previously stored
    fetchDataFromLS();

    // adding new todo into list
    $('#add-task').click(function () {
        // grab input value
        let inputText = $('#input-box').val().trim();
        // check input value is empty or not
        if (inputText === "") {   // if empty
            // show alert message to add todo
            alert("You must write your task.")
        }
        // it not empty
        else {
            // create a li of todo and add it to list container
            $('#todos-container').append(`<li>${inputText}<span>\u00d7</span> </li>`);
            $('#input-box').val('');
            saveDataInLS();
        }
    })

    // clicking into list container
    $('#todos-container').click(function (e) {
        // check if clicked target is li or span
        if (e.target.tagName === 'LI') { // if li
            // toggle the checked class into li classlist
            $(e.target).toggleClass('checked')
        }
        // else if target is span tag
        else if (e.target.tagName === 'SPAN') {
            // remove the parent li from the list
            $(e.target).parent().remove();
        }
        saveDataInLS();
    })

    // function to store list data into browser localstorage
    function saveDataInLS() {
        localStorage.setItem('todos', $('#todos-container').html())
    }

    // function to fetch list data from browser localstorage
    function fetchDataFromLS() {
        $('#todos-container').html(localStorage.getItem('todos'));
    }
});


