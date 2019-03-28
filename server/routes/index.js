const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  /*res.render('index', { title: 'Express' });*/
 /* res.render(express.static(path.join(__dirname, './src/mm')));*/
});

module.exports = router;
