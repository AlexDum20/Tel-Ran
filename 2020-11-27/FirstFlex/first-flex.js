const container = document.querySelector('[container]');

const numSq = 7;

for (let i=1; i<=numSq;i++){
    const sq = document.createElement('div');
    sq.classList.add('sq');
    if (i==3)sq.style.flexGrow=1;
    sq.innerText = i;
    container.appendChild(sq);
}