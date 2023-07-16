window.onload = function() {
    var textInput = document.getElementById('text-input');
    textInput.addEventListener('input', countWords);
  };
  
  function countWords() {
    var textInput = document.getElementById('text-input');
    var wordCount = document.getElementById('word-count');
    var text = textInput.value.trim();
  
    if (text === '') {
      wordCount.innerText = 'Word Count: 0';
    } else {
      var words = text.split(/\s+/).filter(function(word) {
        return word !== '';
      });
  
      wordCount.innerText = 'Word Count: ' + words.length;
    }
  }
  