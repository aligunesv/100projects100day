document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var satisfaction = document.getElementById('satisfaction').value;
    var satisfactionText = "";
  
    switch (satisfaction) {
      case "5":
        satisfactionText = "Very Satisfied";
        break;
      case "4":
        satisfactionText = "Satisfied";
        break;
      case "3":
        satisfactionText = "Neutral";
        break;
      case "2":
        satisfactionText = "Dissatisfied";
        break;
      case "1":
        satisfactionText = "Very Dissatisfied";
        break;
    }
  
    alert('Thanks for answering! Your satisfaction level: ' + satisfactionText);
  });
  