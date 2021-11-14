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
    },
    callbacks: {},
  },
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

