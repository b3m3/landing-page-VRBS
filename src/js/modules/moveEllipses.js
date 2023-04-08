const moveEllipses = () => {
  const ellipses = document.querySelectorAll('._elips');

  function randomRound(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  ellipses.forEach(el => {
    setInterval(() => {
      el.style.transform = `
        translate(${randomRound(-100, 100)}px, ${randomRound(-100, 100)}px)
        scale(${random(0.8, 1.2)})
      `;
      el.style.opacity = `${random(0.55, 0.65)}`;
    }, 3000)
  })
}

export default moveEllipses;