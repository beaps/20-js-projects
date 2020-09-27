const features = document.querySelectorAll('.feature');
const howItWorksContent = document.querySelector('.how-it-works__content');
const howItWorksImage = document.querySelector('#how-it-works__image');
const testimonial = document.querySelectorAll('.testimonial');
const formContainer = document.querySelector('.form-container');
const elements = [
  ...features,
  howItWorksContent,
  howItWorksImage,
  ...testimonial,
  formContainer
];

function intersectionStyles(element, identifier, styles) {
  try {
    if (
      element.target[Object.keys(identifier)[0]] ===
        identifier[Object.keys(identifier)[0]] ||
      element.target.classList.contains(identifier[Object.keys(identifier)[0]])
    ) {
      if (element.isIntersecting) {
        if (styles.init) {
          for (const property in styles.init) {
            element.target.style[property] = styles.init[property];
          }
        }
      } else {
        if (styles.end) {
          for (const property in styles.end) {
            element.target.style[property] = styles.end[property];
          }
        }
      }
    }
  } catch (error) {
    console.error(
      `The intersectionStyles function has three parameters:
      element (node)
      identifier (object) -> attributes: id, className, tagName (uppercase)
      styles (object) -> attributes: init, end`,
      error
    );
  }
}

function allIntersectionStyles(element) {
  intersectionStyles(
    element,
    { className: 'feature' },
    {
      init: {
        animation: `fadeRight 500ms ${element.target.dataset.delay} forwards ease-out`
      },
      end: { animation: 'none' }
    }
  );
  intersectionStyles(
    element,
    { className: 'how-it-works__content' },
    {
      init: {
        animation: `scaleIn 700ms forwards ease-out`
      },
      end: { animation: 'none' }
    }
  );
  intersectionStyles(
    element,
    { id: 'how-it-works__image' },
    {
      init: {
        animation: `animRotateY 850ms ${element.target.dataset.delay} forwards ease-out`
      },
      end: { animation: 'none' }
    }
  );
  intersectionStyles(
    element,
    { className: 'testimonial' },
    {
      init: {
        animation: `fadeRight 500ms ${element.target.dataset.delay} forwards ease-out`
      },
      end: { animation: 'none' }
    }
  );
  intersectionStyles(
    element,
    { className: 'form-container' },
    {
      init: {
        animation: `scaleIn 650ms forwards ease-out`
      },
      end: { animation: 'none' }
    }
  );
}

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      allIntersectionStyles(entry);
    });
  },
  { rootMargin: `0px 0px -100px 0px` }
);

elements.forEach((element) => {
  observer.observe(element);
});
