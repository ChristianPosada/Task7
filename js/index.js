$('#button').on('click',function(){
var input = $('#input').val();
if (!input){
    alert("enter something!");
    return;
}

$('#tasks').append("<p>" +input + "</p>");


});