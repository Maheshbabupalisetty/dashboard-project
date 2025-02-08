window.onload = function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Validation function for table data
function validateTableData() {
    const rows = document.querySelectorAll('table tbody tr');
    let isValid = true;

    rows.forEach((row) => {
        const cells = row.querySelectorAll('td');

        cells.forEach((cell) => {
            if (cell.textContent.trim() === '') {
                isValid = false;
                alert('Error: Table contains empty fields!');
                return;
            }
        });
    });

    if (isValid) {
        alert('Table data is valid!');
    }
}

// Event listener for button click to validate table
document.getElementById('validateButton').addEventListener('click', validateTableData);