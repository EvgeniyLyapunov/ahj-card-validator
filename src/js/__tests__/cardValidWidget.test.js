import CardValidWidget from '../components/card-valid-widget/CardValidWidget';

test('widget should render', async () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardValidWidget(container);

  widget.bindToDOM();

  await expect(container.innerHTML).toEqual(CardValidWidget.markUp);
});

test('widget should add valid classes', async () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardValidWidget(container);

  widget.bindToDOM();

  widget.input.value = '372724703682216';
  await widget.submit.click();

  await expect(widget.result.classList.contains('card-valid__result_valid')).toEqual(true);
  await expect(widget.listCards[0].classList.contains('card-valid__img-item_active')).toEqual(true);
});
