export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

export const formatStatus = (status: string): string => {
  return status.replace('_', ' ').toUpperCase();
};

export const getStatusClass = (status: string): string => {
  switch (status) {
    case 'success':
      return 'bg-green-100 text-green-800';
    case 'rate_limited':
      return 'bg-yellow-100 text-yellow-800';
    case 'failed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
