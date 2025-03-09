
// Checks if an element is in the viewport
export const isElementInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Smooth scroll to element
export const smoothScrollTo = (element: Element): void => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

// Get current visible section
export const getCurrentSection = (): number => {
  const sections = document.querySelectorAll('.snap-section');
  let currentSection = 0;
  
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = index;
    }
  });
  
  return currentSection;
};
