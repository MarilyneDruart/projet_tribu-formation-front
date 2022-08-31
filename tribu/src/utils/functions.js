// Converting YYYY-MM-DD into french format
const dateInFrench = (dateToChange) => {
  const day = (dateToChange.slice(8, 10));
  let month = (dateToChange.slice(5, 7));
  const year = (dateToChange.slice(0, 4));

  // Turning month number into name
  // eslint-disable-next-line
  month === '01' ? month = 'janvier' : month === '02' ? month = 'février' : month === '03' ? month = 'mars' : month === '04' ? month = 'avril' : month === '05' ? month = 'mai' : month === '06' ? month = 'juin' : month === '07' ? month = 'juillet' : month === '08' ? month = 'août' : month === '09' ? month = 'septembre' : month === '10' ? month = 'octobre' : month === '11' ? month = 'novembre' : month === '12' ? month = 'décembre' : ''

  return `le ${day} ${month} ${year}`;
};

export default dateInFrench;
