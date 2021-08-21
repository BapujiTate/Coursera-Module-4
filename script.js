
(function () {

var names = ["Yaakov", "Ravi", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
