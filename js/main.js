// HOMEWORK#10 USER LIST
// 1. Добавить текст ошибки (дописывать <small>Error</small> || alert())
// 2. Проверять, можно ли еще добавить пользователя
//      a. лимит - 10шт.
//      b. блокировать кнопку - disabled


// mockup start
const list = [
  'user1',
  'user2',
  'user3',
];
// mockup end

const $ul = document.querySelector('ul#list');

const removeItem = ($element) => {
  $ul.removeChild($element);
  $input.removeAttribute('disabled');
  $limit.style.display = 'none';
  $info.style.display = 'block';
};

const addItem = (item) => {
  const $li = document.createElement('li');
  $li.innerText = item;
  $li.addEventListener('click', (event) => {
    removeItem(event.target);
  });

  $ul.appendChild($li);
};

list.forEach((el, index) => {
  addItem(el);
});

const $form = document.querySelector('form#user');
const $input = $form.querySelector('input[name="user_name"]');
const $btn = document.querySelector('button[type="submit"]');
const $info = document.querySelector('.info');
const $limit = document.querySelector('.limit');

$input.addEventListener('input', (event) => {
  const {value} = event.target;

  if (value.length >= 2) {
    $btn.removeAttribute('disabled');
    $info.style.display = 'none';
  } else {
    $btn.setAttribute('disabled', 'disabled');
    $info.style.display = 'block';
  }
});

// FORM PATH
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $input.value;
  const {children} = $ul;
  const $li = document.querySelectorAll('li');
  const liNames = [...$li].map(({innerText}) => innerText);

  if (liNames.includes(value)) {
    alert('The user already exists.');
    $input.value = '';
    $btn.setAttribute('disabled', 'disabled');
    $info.style.display = 'block';
    return;
  }

  addItem(value);
  $input.value = '';
  $btn.setAttribute('disabled', 'disabled');
  $info.style.display = 'block';

  if ($ul.children.length === 10) {
    $input.setAttribute('disabled', 'disabled');
    $info.style.display = 'none';
    $limit.style.display = 'block';
  }
});