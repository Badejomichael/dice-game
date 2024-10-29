function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomDiceImage = "dice" + randomNumber1 + ".png";
  const randomImageSource = "images/" + randomDiceImage;

  image1 = document.querySelectorAll('.img1')[0];
  image1.setAttribute("src", randomImageSource);



  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const randomDiceImage2 = "dice" + randomNumber2 + ".png";
  const randomImageSource2 = "images/" + randomDiceImage2;

  image2 = document.querySelectorAll('.img2')[0];
  image2.setAttribute("src", randomImageSource2);

  if(randomNumber1 > randomNumber2) {
    document.querySelector('.hero-text').innerHTML = `🚩 You Win!`;
  } else if(randomNumber1 < randomNumber2) {
    document.querySelector('.hero-text').innerHTML = `Computer Win 🚩!`;
  } else if(randomNumber1 === randomNumber2) {
    document.querySelector('.hero-text').innerHTML = `🚩 Tie! 🚩`;
  }
}