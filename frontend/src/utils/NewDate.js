const NewDate = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dateObj = new Date();
  var month = monthNames[dateObj.getMonth()];
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();

  const newdate = month + " " + day + ", " + year;

  return newdate;
};

export default NewDate;
