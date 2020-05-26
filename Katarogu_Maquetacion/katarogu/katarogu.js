function onClick () {
  const newProduct__button = document.getElementById('newProduct__button')
  const center = document.getElementById('newProduct__center')
  const end = document.getElementById('newProduct__image')


  if(center.classList.contains('none') && end.classList.contains('none')){
    center.classList.remove('none');
    end.classList.remove('none');
  }else{
    center.classList.add('none');
    end.classList.add('none');
  }
};

//POPUP
const button__abrir = document.getElementsByName('button__abrir');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');

const button__cancel = document.getElementById('button__cancel');
const button__delete = document.getElementById('button__delete');

button__abrir.forEach(element => {
  element.addEventListener('click', () => {
    overlay.classList.add('active');
    popup.classList.add('active');
  });
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

