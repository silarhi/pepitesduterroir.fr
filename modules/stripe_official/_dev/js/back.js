/**
 * 2007-2019 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    202-ecommerce <tech@202-ecommerce.com>
 * @copyright Copyright (c) Stripe
 * @license   Commercial license
 */

$(document).ready(function () {
  // Multistore
  var old = $('.bootstrap.panel');
  $('#content').after(old);
  old.css('margin-left', '12%');

  // Test mode
  toggleTestMode();
  $('#configuration_form input').on('change', function () {
    toggleTestMode();
  });

  // Ask confirmation on refund
  $('#configuration_form_submit_btn_2').click(function () {
    if (confirm('Are you sure that you want to refund this order?')) {
      return true;
    }

    return false;
  });

  // Refund mode
  toggleRefundMode();
  $('input[name="STRIPE_REFUND_MODE"]').on('change', function () {
    toggleRefundMode();
  });

  initFaq();
});

// Init faq tabs
// Opens/closes answer on click.
function initFaq() {
  [].slice
    .call(document.querySelectorAll('.tabs'))
    .forEach(function (el) {
      new PSTabs(el);
    });
}

function toggleTestMode() {
  const isTestModeActive = $('input[name="STRIPE_MODE"]:checked', '#configuration_form').val();

  if (isTestModeActive == '1') {
    $('#secret_key').parent().parent().hide();
    $('#public_key').parent().parent().hide();
    $('#test_secret_key').parent().parent().show();
    $('#test_public_key').parent().parent().show();
  } else {
    $('#secret_key').parent().parent().show();
    $('#public_key').parent().parent().show();
    $('#test_secret_key').parent().parent().hide();
    $('#test_public_key').parent().parent().hide();
  }
}

function toggleRefundMode() {
  const isPartialRefund = $('input[name="STRIPE_REFUND_MODE"]:checked').val();
  const $partialAmount = $('.partial-amount');

  if (isPartialRefund) {
    $partialAmount.show();
  } else {
    $partialAmount.hide();
  }
}
