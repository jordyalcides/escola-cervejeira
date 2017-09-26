$(document).on('submit', '#form_newsletter', function(e) {
  e.preventDefault();

  jQuery.ajax({
    type: 'POST',
    URL: '/newsletter/',
    data: {
      email: jQuery('#id_email').val(),
      csrfmiddlewaretoken:jQuery('input[name=csrfmiddlewaretoken]').val()
    },
    success: function() {
        console.log('It\'s work!!');
        jQuery.notify({
          icon: 'fa fa-beer',
          message: "Boa pedida!!"
        },{
          type: 'success'
        });
        jQuery('#form_newsletter')[0].reset();
    },
    error: function() {

    }
  });
});
