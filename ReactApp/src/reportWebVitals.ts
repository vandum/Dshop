import { Metric } from 'web-vitals';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals/attribution';

// Hàm báo cáo hiệu năng với kiểu ReportHandler
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
