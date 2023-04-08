const cursor = (rainbowCursor) => {
  const cur = document.querySelector(".cursor");

  window.addEventListener('mousemove', (e) => {
    cur.style.left = e.clientX + "px";
    cur.style.top = e.clientY + "px";

    cur.classList.remove("active");

    if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'a') {
      cur.classList.add("active");
    }
  });

  new rainbowCursor({
    length: 30,
    colors: ["#402F8F"],
    size: 3,
  });
}

export default cursor;