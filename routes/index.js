import express from 'express';
const router = express.Router();
import { getAllHobbies, getSingleHobby, createHobby, updateHobby, removeHobby } from '../queries';

/*/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/api/hobbies', getAllHobbies);
router.get('/api/hobbies/:id', getSingleHobby);
router.post('/api/hobbies', createHobby);
router.put('/api/hobbies/:id', updateHobby);
router.delete('/api/hobbies/:id', removeHobby);

module.exports = router;
