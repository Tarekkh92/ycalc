function playMeow() {
    const meow = document.getElementById('meow-sound');
    meow.currentTime = 0;
    meow.play();
  }
  function showPawPrint(x, y) {
    const paw = document.createElement('img');
    paw.src = 'https://cdn-icons-png.flaticon.com/512/616/616408.png';
    paw.alt = 'paw print';
    paw.style.position = 'absolute';
    paw.style.left = x + 'px';
    paw.style.top = y + 'px';
    paw.style.width = '30px';
    paw.style.opacity = 0.7;
    paw.style.pointerEvents = 'none';
    paw.style.transition = 'opacity 1s ease';
    document.body.appendChild(paw);
    setTimeout(() => {
      paw.style.opacity = 0;
      setTimeout(() => paw.remove(), 1000);
    }, 300);
  }
  function playMeow() {
    const meow = document.getElementById('meow-sound');
    meow.currentTime = 0;
    meow.play();
  }
  function showKitten() {
    const kitten = document.createElement('img');
    kitten.src = 'https://placekitten.com/200/200';
    kitten.alt = 'Kawaii Kitten';
    kitten.style.position = 'absolute';
    kitten.style.top = '50%';
    kitten.style.left = '50%';
    kitten.style.transform = 'translate(-50%, -50%)';
    kitten.style.borderRadius = '50%';
    kitten.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    kitten.style.zIndex = 9999;
    document.body.appendChild(kitten);
  
    setTimeout(() => {
      kitten.remove();
    }, 3000);
  }
  function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    playMeow();
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
    playMeow();
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    playMeow();
  }
  
  function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;
  
    try {
      // Convert square root and square
      expression = expression.replace(/√\(/g, 'Math.sqrt(');
      expression = expression.replace(/(\d+)\^2/g, 'Math.pow($1, 2)');
  
      // Fractions and powers
      expression = expression.replace(/(\d+)\/(\d+)/g, '($1/$2)');
      expression = expression.replace(/\^/g, '**');
  
      let result = eval(expression);
  
      if (isNaN(result) || result === Infinity) {
        result = 'Error';
      }
  
      display.value = result;
  
      // Show kawaii kitten
      showKitten();
    } catch {
      display.value = 'Error';
    }
  
    playMeow();
  }
  
  function showKitten() {
    const kitten = document.createElement('img');
    kitten.src = 'https://placekitten.com/200/200';
    kitten.alt = 'Kawaii Kitten';
    kitten.style.position = 'absolute';
    kitten.style.top = '50%';
    kitten.style.left = '50%';
    kitten.style.transform = 'translate(-50%, -50%)';
    kitten.style.borderRadius = '50%';
    kitten.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    document.body.appendChild(kitten);
  
    setTimeout(() => {
      kitten.remove();
    }, 3000);
  }
  
  document.addEventListener('keydown', (event) => {
    const key = event.key;
  
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      deleteLast();
    } else if (key === 'Escape') {
      clearDisplay();
    } else {
      const validKeys = '0123456789+-*/.^()';
      if (validKeys.includes(key)) {
        appendToDisplay(key);
      }
    }
  });
  