/* exported data */

var data = {
  view: 'entries',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var oldDataJSON = localStorage.getItem('data');
if (oldDataJSON !== null) {
  data = JSON.parse(oldDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});
