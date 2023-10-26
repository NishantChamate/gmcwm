const moment = require("moment");

module.exports = Object.freeze({
  CALENDAR_INITIAL_EVENTS: [
    {
      title: "Truck-Pune Delivery",
      theme: "GREEN",
      startTime: moment().add(-12, "d").startOf("day"),
      endTime: moment().add(-12, "d").endOf("day"),
    },
    {
      title: "Meeting with team",
      theme: "PINK",
      startTime: moment().add(-8, "d").startOf("day"),
      endTime: moment().add(-8, "d").endOf("day"),
    },
    {
      title: "Due Date - CWM",
      theme: "PURPLE",
      startTime: moment().add(-2, "d").startOf("day"),
      endTime: moment().add(-2, "d").endOf("day"),
    },
    {
      title: "Client Meeting",
      theme: "PURPLE",
      startTime: moment().startOf("day"),
      endTime: moment().endOf("day"),
    },
    {
      title: "Client Meeting",
      theme: "ORANGE",
      startTime: moment().add(3, "d").startOf("day"),
      endTime: moment().add(3, "d").endOf("day"),
    },
    {
      title: "Shipping - Patna Container",
      theme: "PINK",
      startTime: moment().add(5, "d").startOf("day"),
      endTime: moment().add(5, "d").endOf("day"),
    },

    {
      title: "Client Meeting",
      theme: "GREEN",
      startTime: moment().add(8, "d").startOf("day"),
      endTime: moment().add(8, "d").endOf("day"),
    },
  ],

  RECENT_TRANSACTIONS: [
    {
      name: "Alex",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      email: "alex@dashwind.com",
      location: "Paris",
      amount: 100,
      date: moment().endOf("day"),
    },
    {
      name: "Ereena",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      email: "ereena@dashwind.com",
      location: "London",
      amount: 190,
      date: moment().add(-1, "d").endOf("day"),
    },
    {
      name: "John",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      email: "jhon@dashwind.com",
      location: "Canada",
      amount: 112,
      date: moment().add(-1, "d").endOf("day"),
    },
    {
      name: "Matrix",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      email: "matrix@dashwind.com",
      location: "Peru",
      amount: 111,
      date: moment().add(-1, "d").endOf("day"),
    },
  ],
});
