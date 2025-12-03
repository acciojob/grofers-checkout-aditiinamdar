const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all elements with class "price"
    const priceElements = document.querySelectorAll('.price');
    
    // Convert price text to numbers and sum them
    let total = 0;
    priceElements.forEach(element => {
        total += parseFloat(element.textContent);
    });

    // Create new row for total
    const table = document.querySelector('table');
    const totalRow = document.createElement('tr');
    
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '1');
    totalCell.textContent = 'Total';
    totalCell.style.fontWeight = 'bold';

    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = total;
    totalPriceCell.style.fontWeight = 'bold';
    totalPriceCell.style.backgroundColor = '#f0f0f0';

    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalPriceCell);

    // Remove previous total row if exists
    const existingTotal = document.getElementById('total-row');
    if (existingTotal) {
        existingTotal.remove();
    }

    // Add new total row with ID so we can remove it later
    totalRow.id = 'total-row';
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);