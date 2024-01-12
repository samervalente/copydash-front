import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData, text, title }: { chartData: any, text: string, title?: string }) => {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text
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