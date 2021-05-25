/* global data */
/* exported data */

var $photoURL = document.querySelector('.photoURL');
var $newEntryImg = document.querySelector('.newEntryImg');

// console.log($form.elements.target);
// console.dir($form);
// console.log($submit);

$photoURL.addEventListener('input', function (event) {
  $newEntryImg.setAttribute('src', event.target.value);
  if (event.target.value.length === 0) { $newEntryImg.setAttribute('src', 'images/placeholder-image-square.jpg'); }
});

var $form = document.querySelector('.newEntry');

var $submit = document.querySelector('.button');
$submit.addEventListener('click', function (event) {
  event.preventDefault();
  var title = document.querySelector('.title').value;
  var photoURL = document.querySelector('.photoURL').value;
  var notes = document.querySelector('.notes').value;

  var newEntry = {
    title: title,
    photoURL: photoURL,
    notes: notes,
    ID: data.nextEntryId
  };

  data.entries.unshift(newEntry);
  data.nextEntryId++;

  $form.reset();
  $newEntryImg.setAttribute('src', 'images/placeholder-image-square.jpg');

  var dataJSON = JSON.stringify(data);
  var entriesJSON = JSON.stringify(data.entries);

  localStorage.setItem('data', dataJSON);
  localStorage.setItem('entries', entriesJSON);

  // console.log('data.entries', data.entries);
  // console.log('data.nextEntryId', data.nextEntryId);
});
