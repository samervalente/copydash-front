const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const mrrData = [
  { month: "Janeiro", revenue: 10000 },
  { month: "Fevereiro", revenue: 12000 },
  { month: "Março", revenue: 15000 },
  { month: "Abril", revenue: 13000 },
  { month: "Maio", revenue: 14000 },
  { month: "Junho", revenue: 16000 },
  { month: "Julho", revenue: 17000 },
  { month: "Agosto", revenue: 18000 },
  { month: "Setembro", revenue: 16000 },
  { month: "Outubro", revenue: 15000 },
  { month: "Novembro", revenue: 14000 },
  { month: "Dezembro", revenue: 12000 },
];

export const MRRData = {
  type: "bar",
  labels: mrrData.map((label) => label.month),
  datasets: [
    {
      label: "MRR",
      data: mrrData.map((data) => data.revenue),
      tension: 0.4,
    }
  ],
};
