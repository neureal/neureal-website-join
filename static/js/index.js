/**
 * Copyright 2018, BownCo
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var page = (function () {
  var rdy = function () {
    // console.log($('#modal_disclaimer').css('display'));

    // $('#button_show_contract').click(function () {
    //   $('#modal_contract').toggleClass('w3-show');
    // });
    // $('#button_risks_agree').click(function () {
    //   $('#modal_risks').css('display', 'none');
    // });
    // $('#button_disclaimer_agree').click(function () {
    //   $('#modal_disclaimer').css('display', 'none');
    //   $('#modal_risks').css('display', 'block');
    // });
    // $('#modal_disclaimer').css('display', 'block');
  };
  return { rdy: rdy };
})();
$(document).ready(page.rdy);
