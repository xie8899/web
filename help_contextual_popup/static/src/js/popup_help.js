openerp.help_contextual_popup = function(instance, local) {

    var _t = instance.web._t;
    instance.web.ViewManager.include({

        do_create_view: function(view_type) {
            var self = this;
            var res = self._super(view_type);
            self.$el.find('span.view_help').each(function () {
                var $elem = $(this);
                if ($elem.data('click-init')) {
                    return true;
                }
                $elem.data('click-init', true);
                $elem.on('click', function(e) {
                    var params = 'height=400, width=600, location=no, ';
                    params += 'resizable=yes, menubar=yes, titlebar=Bla';
                    path = self.action.id;
                    my_window = window.open('/help/' + path, 'Help', params);
                    // allows to back to the window if opened previoulsy
                    setTimeout('my_window.focus()', 1);
                });

                return true;

            });
            return res;
        },
    });
}
