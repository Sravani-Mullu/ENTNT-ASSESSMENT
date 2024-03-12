import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function OrderCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Order 1', date: '2024-03-15' },
        { title: 'Order 2', date: '2024-03-20' },
        { title: 'Order 3', date: '2024-03-25' },
      ]}
    />
  );
}

export default OrderCalendar;
