$(document).ready(function(){
    //conteudo js
    $("form").on("submit", function(e){
        e.preventDefault();
        const novaTarefa = $("#inputTarefa").val()

        $("ul").append(`<li>${novaTarefa}</li>`)
        $("#inputTarefa").val("")

        $('ul').on('click', 'li', function () {
            $(this).parent('li').toggleClass('checked');
        })
    })
})