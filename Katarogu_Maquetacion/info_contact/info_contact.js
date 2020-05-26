//CHECKBOX
function onChange() {

  const checkbox = document.getElementById('checkbox')
  const container__store = document.getElementById('container__store')
  

  if (checkbox.checked) {
    container__store.classList.remove('active')

  } 
  if(!checkbox.checked) {
    container__store.classList.add('active')
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



