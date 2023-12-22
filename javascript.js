
// CHANGE BACKGROUND-COLOR of HEADER
// listen the scroll event 
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navigation');
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 30) {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  } else {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  }
});


// Invalid email. Please enter again!  event.preventDefault();
function validateEmail() {
  event.preventDefault();
  const subscriberName = document.getElementById('subscriber-name').value;
  const emailInput = document.getElementById('email').value;
  console.log(emailInput);
  const regex = /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@gmail\.com$/i; // sử dụng /i để bỏ qua việc phân biệt chữ hoa chữ thường

  const errorMsg = document.getElementById('errorMessage');
  const successMsg = document.getElementById('successSubmitForm');

  if (!regex.test(emailInput) || subscriberName.trim() == '') {  
    errorMsg.style.display = 'block';
    setTimeout(function() {
      errorMsg.style.display = 'none';
    }, 1500); // Ẩn errorMsg sau 3 giây (3000ms)
    return false;
  } else {
    successMsg.style.display = 'block';
    setTimeout(function() {
      successMsg.style.display = 'none';
    }, 1500); // Ẩn errorMsg sau 3 giây (3000ms)
    document.getElementById('subscriber-name').value = '';
    document.getElementById('email').value = '';
    return true;
  }
}




















