window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.collapsible');
  
  const handleToggle = (event) => {
    const parent = event.target.closest(".collapsible");
    const content = parent.querySelector('.collapsible__content');
    const buttonHide = parent.querySelector('.collapsible__action--visible');
    const buttonShow = parent.querySelector('.collapsible__action--hidden');
    
    if (buttonHide.style.display === 'none') {
      buttonHide.style.display = 'block';
      buttonShow.style.display = 'none';
      content.animate([{transform: 'scale(1, 1)', maxHeight: '1000px'}], {
        duration: 300,
        fill: 'forwards'
      });
    } else {
      buttonHide.style.display = 'none';
      buttonShow.style.display = 'block';
      content.animate([{transform: 'scale(1, 0)', maxHeight: 0}], {
        duration: 300,
        fill: 'forwards'
      });
    }
  }
  
  for (const collapsible of items) {
    const buttonToggle = collapsible.querySelector('.collapsible__button');
    const buttonHide = buttonToggle.querySelector('.collapsible__action--visible');
    const content = collapsible.querySelector('.collapsible__content');
    buttonToggle.addEventListener('click', handleToggle);
    buttonHide.style.display = 'none';
    
    content.animate([{transform: 'scale(1, 0)', maxHeight: 0}], {
      duration: 0,
      fill: 'forwards'
    });
  }
});