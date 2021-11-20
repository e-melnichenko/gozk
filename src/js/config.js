import Popup from "./modules/Popup";

const BREAKPOINTS = {
  tablet: 768,
  desktop: 1200,
  note: 1440,
  desktopLg: 1600,
}

export const SLIDERS = {
  'hero': {
    options: {
      type: 'fade',
      rewind: true,
      mediaQuery: 'min',
      arrows: false,
      breakpoints: {
        [BREAKPOINTS.desktop]: {
          arrows: true
        }
      }
    },
    callbacks: {},
  },
  'mission': {
    options: {
      pagination: false,
      arrows: false,
      fixedWidth: '28rem',
      gap: '2rem',
      padding: '2rem',
      mediaQuery: 'min',
      breakpoints: {
        [BREAKPOINTS.tablet]: {
          padding: '2.4rem',
        },
        [BREAKPOINTS.desktop]: {
          destroy: true,
        }
      }
    }
  }
}

export const PLACEMARKS = [
  {
    coords: [56.859960, 60.667965],
    properties: {},
    options: {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/placemark.svg',
      // iconImageHref: `${BASE_URL}/upload/static/img/placemark.svg`,
      iconImageSize: [30, 42],
    },
  }
];

export const FORMS = {
  'feedback': {
    onSuccess() {
      Popup.open('success-popup')
    }
  },
  'order': {
    onSuccess() {
      Popup.open('success-popup')
    }
  }
}

