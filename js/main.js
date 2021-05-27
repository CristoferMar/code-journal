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

  $noEntries.remove();
  $entryGallery.prepend(addEntry(data.entries[0]));

  swapViews('entries');
});

var $body = document.querySelector('body');
var allViews = document.querySelectorAll('.view');

$body.addEventListener('click', clickHandler);
function clickHandler(event) {
  if (!event.target.matches('.swap')) {
    return;
  }
  event.preventDefault();
  var btnDataView = event.target.getAttribute('data-view');

  swapViews(btnDataView);
}

// <li class="uniqueEntries" data-entry-id="5">
//   <div class="row justifySpaceBetween">
//     <div class="clmHalf">
//       <img class="historyImg" src="https://image.shutterstock.com/z/stock-vector-crash-test-dummy-step-two-657183796.jpg" alt="">
//               </div>
//       <div class="clmHalf">
//         <div class="row justifySpaceBetween alignItemsCenter">
//           <h3>Dummy Variable</h3>
//           <h3 class="rotatePrpl swap editing">✎</h3>
//         </div>
//         <p>This is a placeholder item that will be removed when we have succesfully added the edit button</p>
//       </div>
//     </div>
// </li>

var $entryGallery = document.querySelector('.entryGallery');
var $noEntries = document.querySelector('.noEntries');

function addEntry(object) {
  var $li = document.createElement('li');
  $li.className = 'uniqueEntries';
  $li.setAttribute('data-entry-id', object.ID);
  var $row = document.createElement('div');
  $row.className = 'row justifySpaceBetween';

  $li.appendChild($row);

  var clmHalf1 = document.createElement('div');
  clmHalf1.className = 'clmHalf';
  var $img = document.createElement('img');
  $img.className = 'historyImg';
  $img.setAttribute('src', object.photoURL);

  clmHalf1.appendChild($img);
  $row.appendChild(clmHalf1);

  var clmHalf2 = document.createElement('div');
  clmHalf2.className = 'clmHalf';

  var titleContainer = document.createElement('div');
  titleContainer.className = 'row justifySpaceBetween alignItemsCenter';
  var $title = document.createElement('h3');
  $title.textContent = object.title;
  titleContainer.appendChild($title);
  var editBtn = document.createElement('h3');
  editBtn.className = 'rotatePrpl swap editing';
  editBtn.textContent = '✎';

  titleContainer.appendChild($title);
  titleContainer.appendChild(editBtn);
  clmHalf2.appendChild(titleContainer);

  var $notes = document.createElement('p');
  $notes.textContent = object.notes;

  clmHalf2.appendChild($notes);
  $row.appendChild(clmHalf2);

  return $li;
}

window.addEventListener('DOMContentLoaded', function (event) {
  if (data.entries.length !== 0) {
    $noEntries.remove();
  }

  for (var i = 0; i < data.entries.length; i++) {
    var historyli = addEntry(data.entries[i]);
    $entryGallery.appendChild(historyli);
  }

  swapViews(data.view);

});

function swapViews(location) {
  for (var i = 0; i < allViews.length; i++) {
    if (allViews[i].getAttribute('data-view') === location) {
      allViews[i].className = 'view';
      data.view = location;
    } else {
      allViews[i].className = 'view hidden';
    }
  }
}
