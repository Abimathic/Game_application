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

});
