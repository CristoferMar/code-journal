/* global data */
/* exported data */

var $photoURL = document.querySelector('.photoURL');
var $newEntryImg = document.querySelector('.newEntryImg');

$photoURL.addEventListener('input', function (event) {
  $newEntryImg.setAttribute('src', event.target.value);
  if (event.target.value.length === 0) { $newEntryImg.setAttribute('src', 'images/placeholder-image-square.jpg'); }
});

var $form = document.querySelector('.newEntry');

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

  for (var i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === 'entries') {
      $allViews[i].className = 'view';
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
});

// swapping between displays

var $body = document.querySelector('body');
var $allViews = document.querySelectorAll('.view');

$body.addEventListener('click', clickHandler);
function clickHandler(event) {
  if (!event.target.matches('.swap')) {
    return;
  }

  var btnDataView = event.target.getAttribute('data-view');

  for (var i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === btnDataView) {
      $allViews[i].className = 'view';
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
}
