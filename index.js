const managemy_web3_oracle = require('managemy-web3-oracle');
const managemy_web3_oracle_bot = require('managemy-web3-oracle-bot');
const multer = require('multer');
const node_sass = require('node-sass');
const moment = require('moment');
const dotenv = require('dotenv');
const express = require('express');
const babel_core = require('babel-core');
const solc = require('solc');
const sinon = require('sinon');
const axios = require('axios');
const web3_react = require('web3-react');
const ethers = require('ethers');
const react = require('react');
const mysql = require('mysql');
const ethereumjs_tx = require('ethereumjs-tx');
const supertest = require('supertest');
const jest = require('jest');

const url = require('url');
const myUrl = new URL('https://example.com/foo/bar?query=string');
console.log('Pathname:', myUrl.pathname);
console.log('Query:', myUrl.searchParams.get('query'));

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}