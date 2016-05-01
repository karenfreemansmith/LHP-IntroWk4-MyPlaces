//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
//business logic
function Place(type, location, year, notes) {
  this.type = type;
  this.location = location;
  this.year = year;
  this.notes = notes;
}

//user interface logic
$("#savePlace").submit(function(event) {
  event.preventDefault();
  var inputType = $("#placeType").val();
  var inputLocation =$("#placeLocation").val();
  var inputYear = $("#placeYear").val();
  var inputNotes = $("#placeNotes").val();

  var newPlace = new Place(inputType, inputLocation, inputYear, inputNotes);
  var message = "<p>" + newPlace.year + ": <strong>" + newPlace.type + " in " + newPlace.location + "</strong> <br><em>" + newPlace.notes + "</em></p>";
  $("#showPlaces").append(message);
});
