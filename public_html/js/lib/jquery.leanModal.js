;(function($){
  $.fn.extend({ 
    leanModal: function(options) {
      var defaults = {
        overlay: 0.5,
        duration: 200,
        closeButton: null
      }
            
      var $window = $(window),
          overlay = $("<div id='lean_overlay'></div>"),
          options =  $.extend(defaults, options),
          duration = options.duration;

      $("body").append(overlay);
 
      return this.each(function() {
        var o = options,
            $this = $(this);

        $this.click(function(e) {
          var modal_id = $this.attr("href");
              $modal = $(modal_id),
              modal_height = $modal.outerHeight(),
              modal_width = $modal.outerWidth();

          $window.trigger('open:leanModal');

          overlay.one('click', function() {
            close_modal(modal_id);                    
          });
                  
          $(o.closeButton).one('click', function() { 
            close_modal(modal_id);
          });

          overlay
            .css({ 'display' : 'block', opacity : 0 })
            .fadeTo(duration,o.overlay);

          $modal
            .css({ 
              'display' : 'block',
              'position' : 'absolute',
              'opacity' : 0,
              'z-index': 11000,
              'top' : '50%',
              'left' : '50%',
              'margin-left' : -(modal_width/2) + 'px',
              'margin-top': -(modal_height/2) + 'px'
            })
            .fadeTo(200,1);
          
          e.preventDefault();
        });  
      });

      function close_modal(modal_id){
        overlay.fadeOut(duration, function() {
          $window.trigger('close:leanModal');  
        });
        $(modal_id).css({ 'display' : 'none' });
      }
    }
  });
})(jQuery);