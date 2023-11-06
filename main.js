
const nextYearDate = new Date((new Date()).getFullYear(), 11, 11);

setInterval(() => {
  const todayDate = new Date()
  const secDiff = Math.floor((nextYearDate.getTime() - todayDate.getTime()) / 1000)
  const days = Math.floor((secDiff / (60 * 60)) / 24)
  const hours = Math.floor(secDiff / (60 * 60)) % 24
  const minutes = Math.floor(secDiff / 60) % 60
  const seconds = Math.floor(secDiff) % 60

  dayElement.innerText = days
  hourElement.innerText = hours
  minElement.innerText = minutes
  secElement.innerText = seconds
}, 1000)

function showMessageAndRedirect() {
    // Ocultar el temporizador
    document.querySelector('.countdown').style.display = 'none';
  
    // Mostrar un mensaje
    const messageElement = document.createElement('div');
    messageElement.innerText = '¡FELIZ ANIVERSARIO MI AMOR HERMOSA!';
    messageElement.style.fontSize = '24px';
    messageElement.style.color = 'black';
    document.body.appendChild(messageElement);
  
    // Redirigir a "index.html" después de 3 segundos
    setTimeout(function() {
      window.location.href = 'gift.html';
    }, 3000); // 3000 milisegundos (3 segundos)
  }

setInterval(() => {
    const todayDate = new Date();
    const secDiff = Math.floor((nextYearDate.getTime() - todayDate.getTime()) / 1000);
  
    if (secDiff <= 0) {
      // La cuenta regresiva ha llegado a 0, muestra el mensaje y redirige
      showMessageAndRedirect();
    } else {
      const days = Math.floor((secDiff / (60 * 60)) / 24);
      const hours = Math.floor(secDiff / (60 * 60)) % 24;
      const minutes = Math.floor(secDiff / 60) % 60;
      const seconds = Math.floor(secDiff) % 60;
  
      dayElement.innerText = days;
      hourElement.innerText = hours;
      minElement.innerText = minutes;
      secElement.innerText = seconds;
    }
  }, 1000);
