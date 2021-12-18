var state = false;

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
		'<div class="modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-loading" style="width:150px !important">' +
		'<div class="modal-content">' +
			'<div class="modal-body">' +
                '<div class="loader-div">' +
                    '<div class="turex-loader"></div>' +
                '</div>' +
			'</div>' +
		'</div></div></div>');

    return {
        /**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            var settings = $.extend({
                dialogSize: 'm',
                progressType: ''
            }, options);
            if (typeof message === 'undefined') {
                message = 'Lütfen bekleyiniz...';
            }
            // Configuring dialog
            //$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            //$dialog.find('.progress-bar').attr('class', 'progress-bar');
            //if (settings.progressType) {
            //    $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            //}

            $dialog.find('h3').text(message);
            // Opening dialog

            if (!state) {
                $dialog.modal();
            }
            state = true;
        },
        /**
		 * Closes dialog
		 */
        hide: function () {
            if (state) {
                $('body').addClass("modal-open-noscroll");
                $dialog.modal('hide');

            }
            state = false;
        }
    };

})(jQuery);

