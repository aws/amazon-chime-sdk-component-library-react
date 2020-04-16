const trapFocus = (e:KeyboardEvent, content: HTMLElement) => {
    if (!content) {
      return
    }
    const focusableElements: NodeListOf<HTMLElement> = content.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableEl = focusableElements[0];
    const lastFocusableEl = focusableElements[focusableElements.length - 1];
    if (e.keyCode === 9) {
      if (e.shiftKey && document.activeElement === firstFocusableEl) {
        e.preventDefault();
        lastFocusableEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
        e.preventDefault();
        firstFocusableEl.focus();
      }
    }
};

export default trapFocus;