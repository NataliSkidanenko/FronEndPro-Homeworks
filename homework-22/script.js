document.getElementById('table-container').appendChild(createTable(10, 10));

function createTable(rowsNumber, columnsNumber) {
    const table = document.createElement('table');
    let counter = 0;
    for (let i = 0; i < rowsNumber; i++) {
        const row = table.insertRow();

        for (let j = 0; j < columnsNumber; j++) {
            const cell = row.insertCell();
            cell.innerHTML = `Cell ${++counter}`;
        }
    }
    return table;
}
