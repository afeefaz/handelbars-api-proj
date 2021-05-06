const update = function(){
   let num = $('#input').val() || 5
   const apiURL = 'https://randomuser.me/api/?results='+num

   $.get(apiURL, function( data ) {
    let source = $('#user-template').html();
    let template = Handlebars.compile(source);
    
    let newHTML = template(data);
    $('.container').empty();
    $('.container').append(newHTML);
  });
}

update()