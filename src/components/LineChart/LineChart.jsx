import { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData, title }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];

        if (historicalData && historicalData.prices) {
            historicalData.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString()}`, item[1]]);
            });

            setData(dataCopy);
        }
    }, [historicalData]);

    return (
        <div className="chart-container">
            <h3>{title}</h3>
            <Chart
                chartType="ColumnChart"
                data={data}
                options={{
                    title,
                    hAxis: {
                        title: "Date",
                        slantedText: true,
                        slantedTextAngle: 30,
                    },
                    vAxis: {
                        title: "Prices",
                    },
                    legend: { position: "none" },
                    chartArea: { width: "80%", height: "70%" },
                }}
                width="100%"
            />
        </div>
    );
};

export default LineChart;
