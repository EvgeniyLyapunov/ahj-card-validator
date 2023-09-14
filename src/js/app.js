import CardValidWidget from './components/card-valid-widget/CardValidWidget';

const container = document.querySelector('.container');
const cardValidVidget = new CardValidWidget(container);

cardValidVidget.bindToDOM();
