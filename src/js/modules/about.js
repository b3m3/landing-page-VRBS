const about = gsap => {
  const mainImages = document.querySelectorAll(".about__image");
  const imageParts = gsap.utils.toArray(".about-i");

  const topImgTop = mainImages[0].getBoundingClientRect().top;
  const topImgLeft = mainImages[0].getBoundingClientRect().left;
  const bottomImgTop = mainImages[1].getBoundingClientRect().top;
  const bottomImgLeft = mainImages[1].getBoundingClientRect().left;

  const xPos = (bottomImgLeft - topImgLeft - (mainImages[0].clientWidth / 11));
  const yPos = (bottomImgTop - topImgTop - (mainImages[0].clientHeight / 2) + 30);
  const endPos = mainImages[0].clientHeight + yPos;

  const tl_1 = gsap.timeline();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mainImages[0],
      start: "bottom 70%",
      end: `${endPos}px 60%`,
      scrub: 2
    }
  });

  imageParts.forEach((el, i)=> {
    tl_1.fromTo(el, {scale: 1.2}, {
      scale: .8,
      repeat: -1,
      duration: 1,
      yoyo: true
    }, "-=.5")

    tl.from(el, {
      y: -yPos,
      x: -xPos,
      rotate: 720,
      opacity: i === 4 || i === 5 ? 0 : 1
    })
  });
}

export default about;