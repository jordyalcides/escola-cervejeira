  // $('.geoposition-search input').keyup(function() {
  //   $("#id_endereco").val($(this).val());
  //   console.log('o');
  // });
  var address = document.querySelector('.geoposition-address');

  if(address){
    address.addEventListener('click', function(){
      console.log('p')
    });
  }


  document.querySelector('.geoposition-address').addEventListener('change', function() {
    console.log('k')
  });



  $('.geoposition-address').on("change", function(){
    $("#id_endereco").val($(this).text());
    console.log('test');
  });

$(document).ready(function() {
  $('.geoposition-address').on("change", function(){
    $("#id_endereco").val($(this).text());
    console.log('test');
  });

  $('.geoposition-address').bind("DOMSubtreeModified",function(){
    $("#id_endereco").val($(this).text());
  });
  $('.default').on('click', function() {
    $("#id_endereco").val($('.geoposition-address').text());
  })
});
