import express from 'express';
const router = express.Router();
import { getAllHobbies, getSingleHobby, createHobby, updateHobby, removeHobby } from '../queries';

/**
 * @swagger
 * definition:
 *   Hobby:
 *     properties:
 *       name:
 *         type: string
 *       type:
 *         type: string
 *       isFun:
 *         type: integer
 *       Description:
 *         type: string
 */

/**
 * @swagger
 * /api/hobbies:
 *   get:
 *     tags:
 *       - Hobbies
 *     description: Returns all hobbies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of hobbies
 *         schema:
 *           $ref: '#/definitions/Hobby'
 */
router.get('/api/hobbies', getAllHobbies);
/**
 * @swagger
 * /api/hobbies/{id}:
 *   get:
 *     tags:
 *       - Hobbies
 *     description: Returns a single hobby
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Hobby's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single hobby
 *         schema:
 *           $ref: '#/definitions/Hobby'
 */
router.get('/api/hobbies/:id', getSingleHobby);
/**
 * @swagger
 * /api/hobbies:
 *   post:
 *     tags:
 *       - Hobbies
 *     description: Creates a new hobby
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: hobby
 *         description: Hobby object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Hobby'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/hobbies', createHobby);
/**
 * @swagger
 * /api/hobbies/{id}:
 *   put:
 *     tags:
 *     	 - Hobbies
 *     description: Updates a single hobby
 *     produces: application/json
 *     parameters:
 *       name: hobby
 *       in: body
 *       description: Fields for the Hobby resource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/Hobby'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/api/hobbies/:id', updateHobby);
/**
 * @swagger
 * /api/hobbies/{id}:
 *   delete:
 *     tags:
 *       - Hobbies
 *     description: Deletes a single hobby
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Hobby's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */

router.delete('/api/hobbies/:id', removeHobby);

module.exports = router;
