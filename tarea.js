document.getElementById('calcular').addEventListener('click', function() {
	const producto = document.querySelector('input[name="producto"]:checked').value;
    const talla = parseInt(document.getElementById('talla').value);
    const extras = document.querySelectorAll('input[name="extras"]:checked');
    let total = 0;

    switch (producto) {
        case 'zapatos1':
            total = 50;
            break;
        case 'zapatos2':
            total = 40;
            break;
        case 'zapatos3':
            total = 30;
            break;
        default:
            total = 0;
    }

    for (const extra of extras) {
        if (extra.value === 'envio') {
            total += 10;
        } else if (extra.value === 'garantia') {
            total += 5;
        }
    }

    total *= talla;

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre && email) {
        document.getElementById('total-pagar').textContent = '$' + total;
    } else {
        alert('Por favor, ingresa tu nombre y tu correo electrónico.');
    }
});
