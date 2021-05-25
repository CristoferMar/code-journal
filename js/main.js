/* global data */
/* exported data */

var $photoURL = document.querySelector('.photoURL');
var $newEntryImg = document.querySelector('.newEntryImg');

$photoURL.addEventListener('input', function (event) {
  $newEntryImg.setAttribute('src', event.target.value);
  if (event.target.value.length === 0) { $newEntryImg.setAttribute('src', 'images/placeholder-image-square.jpg'); }
});

var $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  var newEntry = {
    title: $form.elements.title.value,
    photoURL: $form.elements.photoURL.value,
    notes: $form.elements.notes.value,
    ID: data.nextEntryId
  };

  data.entries.unshift(newEntry);
  data.nextEntryId++;

  $form.reset();
  $newEntryImg.setAttribute('src', 'images/placeholder-image-square.jpg');
});
