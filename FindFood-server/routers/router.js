const express = require('express');
const controller = require('./../controllers/controllers');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '${__dirname}/../dev-data/public');
  },
  filename: (req, file, cb) => {
    // console.log(file);
    // console.log(req.body);
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
router.route('/menu').get(controller.getMenu);
router.route('/filteredMenu').post(controller.filter);

// router
//   .route('/menuItem/:id')
//   .get(controller.getMenuItem)
//   .post(upload.single('file'), controller.postMenuItem)
//   .patch(controller.editMenuItem)
//   .delete(controller.deleteMenuItem);

module.exports = router;
