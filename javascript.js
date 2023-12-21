
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


// Invalid email. Please enter again! 
function validateEmail() {
      
  const emailInput = document.getElementById('emailInput').value;
  const regex = /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@gmail\.com$/i; // sử dụng /i để bỏ qua việc phân biệt chữ hoa chữ thường

  if (!regex.test(emailInput)) {
    const errorMsg = document.getElementById('errorMessage');
    errorMsg.style.display = 'block';
    return false;
  }
  const errorMsg = document.getElementById('okMessage');
  errorMsg.style.display = 'block';
  return true;
}




















