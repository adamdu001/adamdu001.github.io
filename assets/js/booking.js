(function () {
  'use strict';

  function initializeBookingDialog() {
    var bookingDialog = document.querySelector('.booking-dialog');
    var trigger = document.querySelector('.js-booking-trigger');
    var closeButton = document.querySelector('.booking-dialog__close');

    if (!bookingDialog || !trigger || !closeButton ||
        typeof bookingDialog.showModal !== 'function') {
      return;
    }

    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      bookingDialog.showModal();
    });

    closeButton.addEventListener('click', function () {
      bookingDialog.close();
    });

    bookingDialog.addEventListener('click', function (event) {
      if (event.target === bookingDialog) {
        bookingDialog.close();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBookingDialog);
  } else {
    initializeBookingDialog();
  }
}());
