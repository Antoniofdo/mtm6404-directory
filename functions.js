/*2.created list() function (uses map())*/
function list(array) {
  return array.map(client => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance.toFixed(2)}</strong>
    </li>
  `).join('');
}

/*3.created order() function (uses sort()) */ 
function order(array, property) {
  return array.slice().sort((a, b) => {
    if (property === 'name') {
      return a.name.localeCompare(b.name);
    }
    return a[property] - b[property];
  });
}

/*4.created total() function (uses reduce())*/
function total(array) {
  return array.reduce((sum, client) => sum + client.balance, 0);
}

/*5.5created info() function (uses find())*/
function info(index) {
  return clients.find(client => client.index === index);
}

/*6.created search() function (uses filter() */
function search(query) {
  const lowerQuery = query.toLowerCase();

  return clients.filter(client =>
    client.name.toLowerCase().includes(lowerQuery)
  );
}
