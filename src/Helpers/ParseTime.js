export const parseTime = (timeInSeconds=0) => {
  const  seconds = timeInSeconds%60 < 10 ? '0'+(timeInSeconds%60) : timeInSeconds%60;
  const minutes = parseInt(timeInSeconds/60);
  return `${minutes}:${seconds}`;
};