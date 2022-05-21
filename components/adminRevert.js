const axios = require("axios");
const express = require("express");
require("dotenv").config();

TURN_TOKEN = process.env.TURN_TOKEN;

function adminRevert(number, body) {
  axios({
    method: "post",
    url: "https://whatsapp.turn.io/v1/messages",
    data: {
      preview_url: false,
      recipient_type: "individual",
      to: number,
      type: "text",
      text: {
        body: body,
      },
    },
    headers: {
      Authorization: `Bearer ${TURN_TOKEN}`,
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      // console.log(error);
    });
}

module.exports = adminRevert;
