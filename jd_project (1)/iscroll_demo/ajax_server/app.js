'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();

app.use('/public', express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let router = express.Router();
let goods = [
    {
        goodsImg: 'http://localhost:8888/public/images/goods-1.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-2.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-3.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-4.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-5.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-6.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-7.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-8.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-9.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-10.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-11.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-12.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-13.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-14.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-15.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-16.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-17.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-18.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-19.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-20.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-21.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-22.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-23.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-24.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-25.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-26.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-27.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-28.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-29.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-30.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-31.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-32.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-33.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-34.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-35.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-36.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-37.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-38.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-39.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-40.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-41.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-42.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-43.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-44.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-45.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-46.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-47.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-48.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-49.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-50.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-51.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-52.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-53.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-54.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-55.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-56.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-57.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-58.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-59.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-60.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-61.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-62.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-63.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-64.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-65.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-66.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-67.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-68.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-69.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-70.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-71.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-72.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-73.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-74.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-75.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-76.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-77.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-78.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-79.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-80.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-81.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-82.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-83.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-84.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-85.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-86.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-87.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-88.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-89.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-90.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-91.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-92.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-93.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-94.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-95.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-96.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-97.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-98.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-99.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-100.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-101.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-102.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-103.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-104.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-105.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-106.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-107.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-108.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-109.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-110.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-111.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-112.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-113.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-114.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-115.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-116.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-117.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-118.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-119.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-120.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-121.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-122.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-123.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-124.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-125.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-126.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-127.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-128.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-129.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-130.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-131.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-132.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-133.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-134.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-135.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-136.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-137.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-138.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-139.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-140.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-141.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-142.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-143.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-144.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-145.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-146.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-147.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-148.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-149.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-150.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-151.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-152.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-153.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-154.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-155.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-156.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-157.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-158.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-159.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-160.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-161.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-162.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-163.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-164.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-165.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-166.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-167.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-168.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-169.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-170.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-171.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-172.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-173.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-174.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-175.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-176.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-177.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-178.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-179.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
    {
        goodsImg: 'http://localhost:8888/public/images/goods-180.jpg',
        price: '6999.00',
        title: '水果机超级无敌笔记本电脑',
        commentQuantity: '99万+',
        store: '水果机京东官方自营旗舰店'
    },
];

let totalQuantity = goods.length, pageSize = 10, pageIndex = 1, lastIndex = Math.ceil(goods.length / pageSize), hasNext = true;

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
}).get('/list', (req, res) => {
    pageIndex = req.query.pageIndex === 'NaN' || req.query.pageIndex ? parseInt(req.query.pageIndex) : pageIndex;
    pageIndex = pageIndex < 1 ? 1 : pageIndex;
    pageIndex = pageIndex > lastIndex ? lastIndex : pageIndex;
    hasNext = pageIndex >= lastIndex ? false : true;
    let goodsList = pageIndex === lastIndex ? goods.slice((pageIndex - 1) * pageSize) : goods.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    if (pageIndex < lastIndex) {
        pageIndex++;
    }
    res.json({
        totalQuantity: totalQuantity,
        pageIndex: pageIndex,
        pageSize: pageSize,
        goodsList: goodsList,
        hasNext: hasNext,
    });
});

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    next();
});

app.use(router);
app.listen('8888', () => {
    console.log('服务器启动，端口8888');
});