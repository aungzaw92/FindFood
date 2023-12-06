const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');

const menu = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/data.json`)
);

exports.getMenu = (req, res) => {
  // console.log(req.requestTime);
  res.status(200).json(menu);
};

exports.filter = (req, res) => {
  const prefer = req.body.preferContent;
  const avoid = req.body.avoidContent;
  let finalResult = [];

  if (prefer.length !== 0) {
    let preferResult = [];
    menu.forEach((menuItem) => {
      for (let pre of prefer) {
        if (
          menuItem.Ingredient.includes(pre) &&
          !preferResult.includes(menuItem)
        )
          preferResult.push(menuItem);
      }
    });
    if (avoid.length !== 0) {
      preferResult.forEach((item) => {
        for (let avo of avoid) {
          if (!item.Ingredient.includes(avo)) finalResult.push(item);
        }
      });
    } else finalResult = preferResult;
  } else {
    menu.forEach((item) => {
      for (let avo of avoid) {
        if (!item.Ingredient.includes(avo)) finalResult.push(item);
      }
    });
  }

  res.status(200).json(finalResult);
};
