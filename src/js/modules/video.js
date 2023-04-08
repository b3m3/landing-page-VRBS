const video = () => {
  const btn = document.querySelector('.info-hero__watch');
  const videoWrapp = document.querySelector('.video-modal');
  const video = document.querySelector('.video-modal video');
  const close = document.querySelector('.video-modal__close')

  btn.addEventListener('click', () => {
    videoWrapp.classList.add('active');
    video.play();
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    videoWrapp.classList.remove('active');
    video.pause();
    document.body.style.overflow = '';
  });
}

export default video;