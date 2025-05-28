// Utility functions for date/time validation and formatting

export const isValidDateTime = (dateTimeString: string): boolean => {
  const date = new Date(dateTimeString);
  return !isNaN(date.getTime());
};

export const formatDateTime = (date: Date): string => {
  return date.toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const getCurrentDateTime = (): string => {
  return formatDateTime(new Date());
};
