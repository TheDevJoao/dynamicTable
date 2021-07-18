function createTable() {
  const table = document.getElementById('table');
  const lines = document.getElementById('lines').value;
  const columns = document.getElementById('columns').value;

  table.innerHTML = '';

  for (let i = 0; i < lines; i++) {
    const line = document.createElement('tr');

    for (let j = 0; j < columns; j++) {
      const cells = document.createElement('td');
      line.appendChild(cells);
    }

    table.appendChild(line);
  }
}

// a função acima gera uma tabela com linhas e colunas informadas

const createButton = document.getElementById('create');

// no botao, fazendo com que a função de gerar tabela seja executada

createButton.addEventListener('click', createTable);
