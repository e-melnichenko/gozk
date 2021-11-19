import svg4everybody from 'svg4everybody';
import CssVars from './modules/CssVars';
import Slider from './modules/Slider';
import 'fslightbox/index';
import initContactsMap from './modules/contactsMap';
import initForm from './modules/form';
import initMask from './modules/mask';
import Popup from './modules/Popup';
import initHeader from './modules/header';
import initTooltip from './modules/tooltip';
import initToggleMenu from './modules/toggleMenu';
import blockResizeTransition from './modules/blockResizeTransition';

svg4everybody();

Popup.init();
initContactsMap();
new Slider();
new CssVars();
new FsLightbox();
initForm();
initMask();
initHeader();
initTooltip();
initToggleMenu();
blockResizeTransition();
