import { axiosInstance } from "@/config/axios";

const uploadSubscriptionMetricsData = async (file: File) => {
  return await axiosInstance.post("/subscription/upload/metrics", file);
};

export { uploadSubscriptionMetricsData };
