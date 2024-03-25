document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("scroll-container");
  let isDown = false;
  let startX;
  let scrollLeft;
  let rafId; // Request Animation Frame ID

  const updateScrollPosition = (x) => {
    const walk = (x - startX) * 2; // Adjust multiplier for sensitivity
    slider.scrollLeft = scrollLeft - walk;
  };

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    cancelAnimationFrame(rafId);
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    cancelAnimationFrame(rafId);
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => updateScrollPosition(x));
  });
});
