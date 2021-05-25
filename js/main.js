/* global data */
/* exported data */

// var $form = document.querySelector('.newEntry');
var $photoURL = document.querySelector('.photoURL');
var $newEntryImg = document.querySelector('.newEntryImg');

// console.log($form.elements);
// console.log($photoURL);

$photoURL.addEventListener('input', function (event) {
  $newEntryImg.setAttribute('src', event.target.value);
});
