const items = [
  "Som molt bons i ens ho hem de creure",
  "la IA es el futur",
  "Tenim nous leads",
  "Commerce Tools",
  "LC connect ha sigut un exit",
  "El Blasco fent numeros",
  "Ja no tenim Media Markt",
  "Beyond acabat",
  "Fum Roger",
  "Hem perdut diners",
  "Hem guanyat diners",
  "Cares noves",
  "Dpt mes important CC",
  "Embitllada al connect '24",
  "Presencialitat a la oficina",
  "Fan sortir el carlos sense res a dir",
];

const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// Init

if (localStorage.getItem('itemsOrder') === null) {
  localStorage.setItem('itemsOrder', shuffleArray(items));
}
if (localStorage.getItem('itemsActive') === null) {
  localStorage.setItem('itemsActive', []);
}

localStorage.getItem('itemsOrder').split(',').forEach(element => {
  const item = document.createElement("button");
  const wrap = document.createElement("div");
  const node = document.createTextNode(element);

  item.classList.add('item', 'btn', 'btn-light', 'ratio', 'ratio-1x1');

  if (localStorage.getItem('itemsActive').split(',').includes(element)) {
    item.classList.add('active');
  }

  item.setAttribute('data-bs-toggle', 'button');
  wrap.classList.add('wrap');
  wrap.appendChild(node);

  item.appendChild(wrap);
  item.addEventListener("click", function (e) {
    let add = e.delegateTarget.matches('.active');
    let items = localStorage.getItem('itemsActive').split(',');
    let textEl = e.delegateTarget.querySelector('.wrap').innerText;

    if (add) {
      items.push(textEl);
    } else {
      items = removeItemOnce(items, textEl);
    }
    localStorage.setItem('itemsActive', items);
  });

  document.getElementById('grid').append(item);
});