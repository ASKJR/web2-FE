export const convertStringToDBDate = (dateString: string): string => {
  const [day, month, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day);

  // Convert the date to YYYY-MM-DD format as a string
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
};

export function convertDBDateToString(dateString: string): string {
  const [year, month, day] = dateString.split('-');

  // Rearrange and format as "DD/MM/YYYY"
  return `${day}/${month}/${year}`;
}
