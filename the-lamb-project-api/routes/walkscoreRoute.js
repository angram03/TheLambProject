const express = require('express');
const axios = require('axios');
const { Client } = require('pg');

const router = express.Router();

const port = process.env.PORT || 3001;


