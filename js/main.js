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
});

// This is for the new button at the top
var $main = document.querySelector('main');
// var $buttons = document.querySelectorAll('.click');
var $allViews = document.querySelectorAll('.view');

// console.log('$allViews:', $allViews);
// console.log('$main:', $main);
// console.log('$buttons:', $buttons);

$main.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (!event.target.matches('.click')) {
    return;
  }

  var displayContainer = event.target.closest('.view');
  var dataView = displayContainer.getAttribute('data-view');

  // perhaps each button should have a class corelating to their destination.
  // then I can compare that class to each index in $allViews

  for (var i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === dataView) {
      displayContainer.className = 'view hidden';
    } else {
      $allViews[i].className = 'view';
    }
  }

}
