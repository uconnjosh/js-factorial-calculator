//Josh and Aaron


var matches = [];
var anaGram = function(wordA, wordList) {
  wordList = wordList.split(" ");
  wordA = wordA.split("");
  wordA = wordA.sort();


  for (var index = 0; index < wordList.length; index +=1) {
    wordList = (wordList[index].split(" "));
  }
console.log(wordList);
  for (var index = 0; index < wordList.length; index +=1) {
    if (wordList[index].split("").sort() === wordA) 
    {
      matches.push(index);
    }  
  }
  alert(matches);
};


$(document).ready(function () {
    var title;
      $("form#anagrammer").submit(function(event) {
        wordA = $("input#wordA").val();
        wordList = $("input#wordList").val();
    var result = anaGram(wordA, wordList);
    
    event.preventDefault();
  });
});








