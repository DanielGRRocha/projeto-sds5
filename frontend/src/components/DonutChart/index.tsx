import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    //FORMA ERRADA
    let chartData : ChartData = { labels: [], series: []};
    //()`${BASE_URL}/sales/amount-by-seller`)
    axios.get(BASE_URL + '/sales/amount-by-seller')
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            chartData = { labels: myLabels, series: mySeries};
            console.log(chartData);
        });

    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Jim Halper', 'Dwight Schrutet', 'Stanley Hudson', 'Kelly Kapoor', 'Ryan Howard']
    //}

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }} //mock: usado quando se usa dados "de mentira", estáticos
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
