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
