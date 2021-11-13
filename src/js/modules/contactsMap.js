import { PLACEMARKS } from "../config"
import YMap from "./YMap"

export default function initContactsMap() {
  const container = document.querySelector('#contacts-map');
  if(typeof ymaps === undefined || !container) return

  ymaps.ready(() => {
    const yMap = new YMap({
      id: 'contacts-map',
      params: {
        center: PLACEMARKS[0].coords,
        zoom: 14,
        controls: ['zoomControl'],
      }
    });

    yMap.addPlacemark(PLACEMARKS[0])
  })

}
