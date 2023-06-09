const quotes = [
    "That's quote one!",
    "That's quote two!",
    "That's quote three!",
    "That's quote four!",
    "That's quote five!",
    "That's quote six!",
    "That's quote seven!",
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
  }
  