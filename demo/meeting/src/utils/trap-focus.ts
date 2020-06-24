const trapFocus = (e: KeyboardEvent, content: HTMLDivElement): void => {
  if (!content) {
    return;
  }
  const focusableModalElements: NodeListOf<HTMLElement> = content.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableModalElements[0];
  const lastElement = focusableModalElements[focusableModalElements.length - 1];

  if (!e.shiftKey && document.activeElement !== firstElement) {
    firstElement.focus();
    return e.preventDefault();
  }

  if (e.shiftKey && document.activeElement !== lastElement) {
    lastElement.focus();
    e.preventDefault();
  }
};

export default trapFocus;
