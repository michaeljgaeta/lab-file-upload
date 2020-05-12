'use strict';
const express = require("express");
const { Router } = require('express');
const multer = require("multer");

const cloudinary = require("cloudinary");
const multerStorageCloudinary = require("multer-storage-cloudinary");
const router = new Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multerStorageCloudinary({
  cloudinary,
  folder: "may-2020"
});

const uploader = multer({ storage });

///

router.get('/', (req, res, next) => {
  console.log(req.user);
  res.render('index', { title: 'Hello World!' });
});

router.get('/private', (req, res, next) => {
  res.render('private');
});

module.exports = router;
