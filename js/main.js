/* global data */
/* exported data */

var $photoURL = document.querySelector('.photoURL');
var $newEntryImg = document.querySelector('.newEntryImg');
var i = 0;

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

  $noEntries.remove();

  i = 0;
  $entryGallery.prepend(addEntry());

  for (i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === 'entries') {
      $allViews[i].className = 'view';
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
});

var $body = document.querySelector('body');
var $allViews = document.querySelectorAll('.view');

$body.addEventListener('click', clickHandler);
function clickHandler(event) {
  if (!event.target.matches('.swap')) {
    return;
  }
  event.preventDefault();
  var btnDataView = event.target.getAttribute('data-view');

  for (i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === btnDataView) {
      $allViews[i].className = 'view';
      data.view = btnDataView;
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
}

//   <li>
//     <div class="row justifySpaceBetween">
//       <div class="clmHalf">
//         <img class="historyImg"
//         src="https://image.shutterstock.com/image-photo/man.jpeg" alt="">
//       </div>
//       <div class="clmHalf">
//         <h3>Pasley is different than Parsley</h3>
//         <p>Dogs have smelled since the dawn of time, when they first learned exist.</p>
//       </div>
//     </div>
//   </li>

var $entryGallery = document.querySelector('.entryGallery');
var $noEntries = document.querySelector('.noEntries');

function addEntry() {
  var $li = document.createElement('li');
  var $row = document.createElement('div');
  $row.className = 'row justifySpaceBetween';

  $li.appendChild($row);

  var clmHalf1 = document.createElement('div');
  clmHalf1.className = 'clmHalf';
  var $img = document.createElement('img');
  $img.className = 'historyImg';
  $img.setAttribute('src', data.entries[i].photoURL);

  clmHalf1.appendChild($img);
  $row.appendChild(clmHalf1);

  var clmHalf2 = document.createElement('div');
  clmHalf2.className = 'clmHalf';
  var $title = document.createElement('h3');
  $title.textContent = data.entries[i].title;
  var $notes = document.createElement('p');
  $notes.textContent = data.entries[i].notes;

  clmHalf2.appendChild($title);
  clmHalf2.appendChild($notes);
  $row.appendChild(clmHalf2);

  return $li;
}

window.addEventListener('DOMContentLoaded', function (event) {
  if (data.entries.length !== 0) {
    $noEntries.remove();
  }

  for (i = 0; i < data.entries.length; i++) {
    var $li = addEntry();
    $entryGallery.appendChild($li);
  }

  for (i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === data.view) {
      $allViews[i].className = 'view';
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
});
