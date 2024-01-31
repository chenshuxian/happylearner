/* eslint-disable import/no-anonymous-default-export */
import { errorCode } from '@/utils/errorCode';
import { getPage, createPage, deleteManyPage } from '@/libs/pages';

/**
 * @swagger
 * tags:
 *   - name: pages
 *     description: The pages
 *
 * definitions:
 *   pages:
 *     type: object
 *     properties:
 *       pageNumber:
 *         type: int
 *         description: The pageNumber
 *         example: 1
 *       subtitle:
 *         type: string
 *         description: The str of page
 *         example: 三隻小豬......
 *       imageUrl:
 *         type: string
 *         description: The url of page
 *         example: /story/images/storyName/1.jpeg
 *       audioUrl:
 *         type: string
 *         description: The audio of page
 *         example: /story/audios/storyName/1.mp3
 *       storyId:
 *         type: int
 *         description: The id of story
 *         example: 1
 *   rows:
 *     type: object
 *     properties:
 *       rows:
 *         type: array
 *         items:
 *           $ref: '#/definitions/pages'
 *       total:
 *         type: integer
 *         example: 1
 *
 * components:
 *   schemas:
 *     page:
 *       $ref: '#/definitions/pages'
 *
 * /api/pages:
 *   get:
 *     tags:
 *       - pages
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
 *               $ref: '#/definitions/pages'
 *   post:
 *     tags:
 *       - pages
 *     summary: Create a page
 *     description: Create a new page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/pages'
 *     responses:
 *       201:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/pages'
 */
export default async (req, res) => {
	const {
		query: { isDelete, offset, limit },
		body: storyData,
		method,
	} = req;

	let pages;
	switch (method) {
		case 'GET':
			try {
				pages = await getPage();
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}

			if (pages) {
				res.status(201).json({ rows: pages });
				return;
			}
			break;
		case 'POST':
			if (!storyData) {
				res.status(400).json(errorCode.BadRequest);
				return;
			}

			try {
				pages = await createPage(storyData);
			} catch (e) {
				console.log(`add page err: ${JSON.stringify(e)}`);
				res.status(e.statusCode).json(e);
				return;
			}

			if (pages) {
				res.status(201).json({ success: true, rows: pages });
				return;
			}
			break;
		case 'DELETE':
			if (!storyData) {
				res.status(400).json(errorCode.BadRequest);
				return;
			}

			try {
				pages = await deleteManyPage(storyData);
			} catch (e) {
				console.log(`deleteManyPages err: ${JSON.stringify(e)}`);
				res.status(e.statusCode).json(e);
				return;
			}

			if (pages) {
				res.status(201).json({ success: true, rows: pages });
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
