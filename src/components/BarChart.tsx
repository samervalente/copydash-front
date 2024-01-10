import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }: { chartData: any }) => {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Receita recorrente mensal</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "MRR para o ano de 2022"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
};