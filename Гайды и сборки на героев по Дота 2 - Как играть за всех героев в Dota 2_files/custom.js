document.querySelector('.badge-link').addEventListener('click', function(event) {
  event.preventDefault();
  
  document.getElementById('top').scrollIntoView({ behavior: 'smooth' });

});


window.addEventListener('scroll', function() {
  let badgeImg = document.querySelector('.badge-img');
  let scrollPositionToShowBadge = 600;

  if (window.scrollY < scrollPositionToShowBadge) {
    badgeImg.classList.add('badge-img_hidden');
  } else {
    badgeImg.classList.remove('badge-img_hidden');
  }
});