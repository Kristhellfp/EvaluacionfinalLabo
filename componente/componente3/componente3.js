let componente3 = document.createElement('div');
componente3.className = "componente3";

let h2 = document.createElement('h2');
h2.innerText = "Características";
componente3.appendChild(h2);

let list = document.createElement('ul');
for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.innerText = `Dato ${i}`;
    list.appendChild(li);
}
componente3.appendChild(list);

export { componente3 };
