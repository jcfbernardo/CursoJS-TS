const paragrafos = document.querySelector('.paragrafos');
const lista = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (const p of lista) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}
