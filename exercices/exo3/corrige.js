const $parole = document.getElementById('paroles');
document
  .getElementById('masquer-paroles')
  .addEventListener('click', function () {
    $parole.classList.toggle('hidden');
  });

const $refrains = [].slice.call(document.querySelectorAll('.refrain'), 1);

document
  .getElementById('masquer-refrains')
  .addEventListener('click', function (ev) {
    $refrains.forEach(function ($el) {
      if (ev.target.checked) {
        $el.querySelector('.definition').classList.remove('hidden');
        $el.querySelector('.contenu').classList.add('hidden');
      } else {
        $el.querySelector('.definition').classList.add('hidden');
        $el.querySelector('.contenu').classList.remove('hidden');
      }
    });
  });

$refrains.forEach(function (el) {
  el.addEventListener('mouseenter', function () {
    el.querySelector('.contenu').classList.remove('hidden');
  });
  el.addEventListener('mouseleave', function () {
    if (!el.querySelector('.definition').classList.contains('hidden')) {
      el.querySelector('.contenu').classList.add('hidden');
    }
  });
});
