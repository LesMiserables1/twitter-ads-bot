const express = require('express')
const TelegramBot = require('node-telegram-bot-api')

const TOKEN_BOT = process.env.TOKEN_BOT

let bot = new TelegramBot(TOKEN_BOT)
let app = express()
