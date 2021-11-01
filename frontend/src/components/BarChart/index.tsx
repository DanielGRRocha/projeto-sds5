import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Jim Halper', 'Dwight Schrutet', 'Stanley Hudson', 'Kelly Kapoor', 'Ryan Howard']
        },
        series: [
            {
                name: "% Sucesso",
                data: [67.7, 67.1, 43.6, 45.6, 0]                   
            }
        ]
    };


    return (
       <Chart 
            options={{ ...options, xaxis: mockData.labels}} //mock: usado quando se usa dados "de mentira", estáticos
            series={mockData.series}
            type="bar"
            height="240"
       />
    );
}

export default BarChart;
