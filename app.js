// Debounce function to limit the frequency of scroll event
function debounce(func, wait = 20) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
  
  // Detect when element comes into view
  function handleScroll() {
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var rect = section.getBoundingClientRect();
      var isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isInView) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    }
  }
  
  window.addEventListener('scroll', debounce(handleScroll));




  window.onload = function() {
    document.querySelector('.cont_modal').className = "cont_modal";
    document.getElementById('pngImage').addEventListener('mouseover', openModal);
  }
  
  var c = 0;
  
  function openModal() {
    if (c % 2 == 0) {
      document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
      c++;
    } else {
      document.querySelector('.cont_modal').className = "cont_modal";
      c++;
    }
  }
  