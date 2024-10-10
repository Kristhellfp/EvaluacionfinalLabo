let componente1 = document.createElement('div');
componente1.className = "componente1";

let img = document.createElement('img');
img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F506%2F404%2Fnon_2x%2Fcontact-person-red-icon-free-png.png&f=1&nofb=1&ipt=89eb25db55c8c01bdfc6368bd2b41f544f996411ff43099bc31083a119c227d6&ipo=images";
img.className = "componente1-img";
componente1.appendChild(img);

let h2 = document.createElement('h2');
h2.innerText = "Componente 1";
componente1.appendChild(h2);

export { componente1 };
