const cron = require('node-cron');
const axios = require('axios');

function scheduleDeleteBooking(bookingId, endDate) {
  const [year, month, day] = endDate.split('-');

  const cronPattern = `35 11 ${day} ${month} *`;
  cron.schedule(cronPattern, async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/hotel/deleteBookingById', { bookingId });
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  });
};

module.exports = { scheduleDeleteBooking };


