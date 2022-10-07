const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation');
      }
    });
  });

const elementsToAnimate = document.querySelectorAll('.animate');

elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
