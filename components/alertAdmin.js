const axios = require("axios");
const express = require("express");
require("dotenv").config();

TURN_NAMESPACE = process.env.TURN_NAMESPACE;
TEMPLATE_NAME = process.env.TEMPLATE_NAME;
TEMPLATE_LANGUAGE = process.env.TEMPLATE_LANGUAGE;
TURN_TOKEN = process.env.TURN_TOKEN;

function alertAdmin(admin, message, sender_name, sender_number) {
  axios({
    method: "post",
    url: "https://whatsapp.turn.io/v1/messages",
    data: {
      to: admin,
      type: "template",
      template: {
        namespace: TURN_NAMESPACE,
        name: TEMPLATE_NAME,
        language: {
          code: TEMPLATE_LANGUAGE,
          policy: "deterministic",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: sender_name,
              },
              {
                type: "text",
                text: sender_number,
              },
              {
                type: "text",
                text: message,
              },
            ],
          },
        ],
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

module.exports = alertAdmin;
