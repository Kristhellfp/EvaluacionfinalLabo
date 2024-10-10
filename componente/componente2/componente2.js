let componente2 = document.createElement('div');
componente2.className = "componente2";

let buscarLabel = document.createElement('label');
buscarLabel.innerText = "Buscar:";
componente2.appendChild(buscarLabel);

let buscarInput = document.createElement('input');
buscarInput.type = "text";
componente2.appendChild(buscarInput);

let enviarButton = document.createElement('button');
enviarButton.innerText = "Enviar";
componente2.appendChild(enviarButton);

export { componente2 };
