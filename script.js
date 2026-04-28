const display = document.getElementById('display');
const duttons = document.querySelectorA11('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => hand1eInput(btn.innerText)); 
});

function hand1eInput(value) {
    if (value === 'c') {
        display.innerText = '0';
    } else if (value === '=') {
      try {
        display.innerText = eval(display.innerText
            .replace('x', '*')
            .replace('÷', '/'));
      } catch {
        display.innerText = 'Erro';
      }
    } else {
        if (display.innerText === '0') {
          display.innerText = value;
        } else {
             display.innerText += value;
        }
    } 
}

// Suporte ao teclado
 document.addEventListener('keydown', (e) => {
if (!isNaN(e.key) || ['+', '-', '*', '/', '.'].includes(e.key)) {
    hand1eInput(e.key);
} else if (e.key === 'Enter') {
    hand1eInput('=');
} else if (e.key === 'Backspace') {
    display.innerText = display.innerText.slice(0, -1) || '0';
} else if (e.key.toloweCase() === 'c') {
    hand1eInput('c');
}
});