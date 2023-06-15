const cron = require('node-cron');
const { deleteBookingById } = require('./controllers/hotel');

function scheduleDeleteBooking(bookingId, endDate) {
  const [year, month, day] = endDate.split('-');

  // Schedule the task to run at midnight on the end date
  const cronPattern = `0 0 ${day} ${month} *`;
  cron.schedule(cronPattern, () => {
    deleteBookingById(bookingId);
  });

  console.log('Scheduled task to delete booking on endDate:', endDate);
};

module.exports = { scheduleDeleteBooking };
      
      
      