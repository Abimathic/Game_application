// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery_nested_form
//= require turbolinks
//= require select2
//= require_tree .

$(document).on('turbolinks:load', function() {
	$( "#team_users" ).select2({
    	theme: "bootstrap",
    	width: "200px"
	});

	window.NestedFormEvents.prototype.insertFields = function(content, assoc, link) {
	    var $tr = $(link).closest('tr');
	    return $(content).insertBefore($tr);
  	}

	setTimeout(function() {
	  $('#successMessage').fadeOut('fast');
	}, 1000); 

	$(".user-form").validate({
      rules: {
        'user[first_name]': "required",
        'user[last_name]': "required"
              }
    });

    $(".new_team").validate({
      rules: {
        'team[name]': "required",
        'team[users][]': "required"
              }
    });

    $(".new_game").validate({
      rules: {
        'game[name]': "required"              }
    });

    $('.game-submit').on('click', function () {
	   $(".game-score, .team-name, .game-win").each(function(index,item) {
	      $(this).rules('add', {
	        required: true, 
	      });
	    });    
	  });
    $('#new_game').submit(function(){
      if($(this).valid()){
      var sum = 0;
      $(".game-win").each(function(index,item) {
        var data = parseFloat($(this).val());
        sum = sum + data;
      });
      if(sum!=1){
        $('.game-name').html('<div style="position: relative; min-height: 80px;" class="col-xs-12 no_padding review"><div class="error_message"><h4>Please enter correct winning team(i.e match has one winning team)</h4></div></div>')
          setTimeout(function() {
            $('.error_message').fadeOut('fast');
            $('.review').remove();
          }, 3000);         
        return false;
      }
        
      }
    });
    $(".game-win").keypress(function (e) {
      var data_val = $(this).attr("data");
      console.log(data_val)
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        console.log($(".error-jquery_"+data_val))
        $(".error-jquery_"+data_val).html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });

});
