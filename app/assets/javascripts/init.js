 document.addEventListener('turbolinks:load', function() {
    $(".dropdown-button").dropdown();

    M.Modal._count = 0;   
    $('.modal').modal();
 });