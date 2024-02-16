/* eslint-disable import/no-anonymous-default-export */
import { errorCode } from '@/utils/errorCode';
import { getStory, createStory, deleteManyStory } from '@/libs/stories';
import { uploadJSON } from '@/utils/upload';

/**
 * @swagger
 * tags:
 *   - name: stories
 *     description: The stories
 *
 * definitions:
 *   stories:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: The story ID auto
 *         example: 1
 *       title:
 *         type: string
 *         description: The title of story
 *         example: 三隻小豬
 *       description:
 *         type: string
 *         description: The description of story
 *         example: 這是一個三隻小豬的故事
 *   rows:
 *     type: object
 *     properties:
 *       rows:
 *         type: array
 *         items:
 *           $ref: '#/definitions/stories'
 *       total:
 *         type: integer
 *         example: 1
 *
 * components:
 *   schemas:
 *     page:
 *       $ref: '#/definitions/stories'
 *
 * /api/stories:
 *   get:
 *     tags:
 *       - stories
 *     summary: Get a list of story
 *     description: Get a list of story
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: isDelete
 *         in: query
 *         description: is delete
 *         required: false
 *         schema:
 *           type: boolean
 *       - name: offset
 *         in: query
 *         description: offset
 *         required: false
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         description: limit
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of story
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/stories'
 *   post:
 *     tags:
 *       - stories
 *     summary: Create a story
 *     description: Create a new story
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/stories'
 *     responses:
 *       201:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/stories'
 */
export default async (req, res) => {
	const {
		query: { isDelete, offset, limit },
		body: storyData,
		method,
	} = req;

	let stories;
	switch (method) {
		case 'GET':
			try {
				stories = await getStory();
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}

			if (stories) {
				res.status(201).json(stories);
				return;
			}
			break;
		case 'POST':
			if (!storyData) {
				res.status(400).json(errorCode.BadRequest);
				return;
			}

			try {
				stories = uploadJSON(req, res, createStory);
			} catch (e) {
				console.log(`add page err: ${JSON.stringify(e)}`);
				res.status(e.statusCode).json(e);
				return;
			}

			if (stories) {
				res.status(201).json({ success: true, rows: stories });
				return;
			}
			break;
		case 'DELETE':
			if (!storyData) {
				res.status(400).json(errorCode.BadRequest);
				return;
			}

			try {
				stories = await deleteManyStory(storyData);
			} catch (e) {
				console.log(`deleteManyPages err: ${JSON.stringify(e)}`);
				res.status(e.statusCode).json(e);
				return;
			}

			if (stories) {
				res.status(201).json({ success: true, rows: stories });
				return;
			}
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
			res.status(405).json(errorCode.MethodNotAllowed);
			return;
	}

	res.status(500).json(errorCode.InternalServerError);
};
