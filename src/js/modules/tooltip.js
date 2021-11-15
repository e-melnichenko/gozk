import { createPopper  } from "@popperjs/core";

export default function initTooltip() {
  const lkButton = document.querySelector('.js-lk-btn');
  const tooltip = document.querySelector('.js-lk-tooltip');

  lkButton.addEventListener('click', (e) => e.preventDefault());

  const popperInstance = createPopper(lkButton, tooltip, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ]
  });

  function show() {
    // Make the tooltip visible
    tooltip.setAttribute('data-show', '');

    // Enable the event listeners
    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    popperInstance.update();
  }

  function hide() {
    // Hide the tooltip
    tooltip.removeAttribute('data-show');

    // Disable the event listeners
    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach((event) => {
    lkButton.addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    lkButton.addEventListener(event, hide);
  });
}
