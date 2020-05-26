
//CHECKBOX
function onChange() {

  const checkbox = document.getElementById('checkbox')
  const container__store = document.getElementById('container__store')
  

  if (checkbox.checked) {
    container__store.classList.remove('none')

  } 
  if(!checkbox.checked) {
    container__store.classList.add('none')
  }
}

//SELECT
function onSelect(prop) {
  const select = document.getElementById('select_attention');
  const text = document.getElementById('div_h3');
  const select_city = document.getElementById('select_city');
  const select_schedule = document.getElementById('select_schedule')

  if (prop.value == 'Atención normal' || prop.value == 'Atención parcial'){
    text.classList.remove('isVisible');
    select_city.classList.remove('isVisible');
    select_schedule.classList.remove('isVisible');
  } 
  else if(prop.value == 'No estoy atendiendo'){
    if (!text.classList.contains('isVisible')) {
      text.classList.add('isVisible');
      select_city.classList.add('isVisible');
      select_schedule.classList.add('isVisible');
    }
  }

}

//POPUP
const button__abrir = document.getElementById('button__abrir');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const button__cancel = document.getElementById('button__cancel');
const button__delete = document.getElementById('button__delete');
const button__suspend = document.getElementById('button__suspend');

button__abrir.addEventListener('click', () => {
  overlay.classList.add('active');
  popup.classList.add('active');
});

button__cancel.addEventListener('click', () => {
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

button__delete.addEventListener('click', () => {
  popup.classList.remove('active');
  popup2.classList.add('active');
  setTimeout(()=> {
    overlay.classList.remove('active')
    popup2.classList.remove('active');
  } ,3000)
});


button__suspend.addEventListener('click', () => {
  popup.classList.remove('active');
  popup3.classList.add('active');
  setTimeout(()=> {
    overlay.classList.remove('active')
    popup3.classList.remove('active');
  } ,3000)
});




