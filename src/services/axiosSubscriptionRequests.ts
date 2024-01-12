import { axiosInstance } from "@/config/axios";

export interface GetChurnRatePeriod {
  start_date: Date | undefined;
  end_date: Date | undefined;
}

const uploadSubscriptionMetricsData = async (
  file: File,
  period?: GetChurnRatePeriod
) => {
  return await axiosInstance.post(
    `/subscription/upload/metrics?start_date=${
      period?.start_date ?? new Date("01/01/2022")
    }&end_date=${period?.end_date ?? new Date("12/12/2022")}`,
    file
  );
};

const getChurnRateByPeriod = async (period: GetChurnRatePeriod) => {
  return await axiosInstance.get(
    `/subscription/churn-rate?start_date=${period.start_date}&end_date=${period.end_date}`
  );
};

export { uploadSubscriptionMetricsData, getChurnRateByPeriod };
