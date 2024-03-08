//For bar chart
// Sample data for the bar graph
const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Monthly Progress Report',
        data: [65, 59, 80, 81, 100],
        backgroundColor: 'rgba(119, 0, 255, 0.4)',
        borderColor: 'rgba(0, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Options for the bar graph
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Create and render the bar graph
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});