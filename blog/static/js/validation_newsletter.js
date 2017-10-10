// $(document).on('submit', '#form_newsletter', function(e) {
//   e.preventDefault();
//
//   jQuery.ajax({
//     type: 'POST',
//     URL: "{% url 'newsletter' %}",
//     data: {
//       email: jQuery('#id_email').val(),
//       csrfmiddlewaretoken:jQuery('input[name=csrfmiddlewaretoken]').val()
//     },
//     success: function() {
//         console.log('It\'s work!!');
//         jQuery.notify({
//           icon: 'fa fa-beer',
//           message: "Boa pedida!!"
//         },{
//           type: 'success'
//         });
//         jQuery('#form_newsletter')[0].reset();
//     },
//     error: function() {
//
//     }
//   });
// });
$(document).on('submit', '#form_newsletter', function(e) {

  e.preventDefault();
      var email = jQuery('#id_email').val();

  jQuery.ajax({
      url: '/newsletter/',
      data: {
        'email': email
      },
      dataType: 'json',
      success: function (data) {
        if (data.is_taken) {
          console.log(data.is_taken);
          jQuery.notify({
            icon: 'fa fa-beer',
            message: "Opa, você já está cadastrado!!"
          },{
            type: 'danger'
          });
        } else {
          jQuery.notify({
            icon: 'fa fa-beer',
            message: "Boa pedida!!"
          },{
            type: 'info'
          });
        }
        jQuery('#form_newsletter')[0].reset();
      }
  });
});
