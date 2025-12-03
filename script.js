const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll('.price');
    let total = 0;
    
    prices.forEach(p => {
        total += parseFloat(p.textContent);
    });

    const table = document.querySelector('table');
    
    // Remove previous total row if exists
    const oldRow = document.getElementById('total-row');
    if (oldRow) oldRow.remove();

    // Create new total row
    const tr = document.createElement('tr');
    tr.id = 'total-row';

    const tdLabel = document.createElement('td');
    tdLabel.textContent = 'Total';
    tdLabel.style.fontWeight = 'bold';

    const tdTotal = document.createElement('td');
    tdTotal.textContent = total;
    tdTotal.id = 'ans';                    // This is what the test expects
    tdTotal.style.fontWeight = 'bold';

    tr.appendChild(tdLabel);
    tr.appendChild(tdTotal);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);