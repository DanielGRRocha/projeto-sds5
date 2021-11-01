import Chart from 'react-apexcharts';

const DonutChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Jim Halper', 'Dwight Schrutet', 'Stanley Hudson', 'Kelly Kapoor', 'Ryan Howard']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }} //mock: usado quando se usa dados "de mentira", estáticos
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
