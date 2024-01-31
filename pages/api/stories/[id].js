/* eslint-disable import/no-anonymous-default-export */
import { errorCode } from '@/utils/errorCode';
import { updateStory, deleteManyStory, getStoryById } from '@/libs/stories';

/**
 * @swagger
 * /api/stories/{id}:
 *   get:
 *     tags:
 *       - stories
 *     summary: Get a stories of user
 *     description: Get a stories of user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of story
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: stories 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/stories'
 *   patch:
 *     tags:
 *       - stories
 *     summary: Update a stories
 *     description: Update a stories
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the stories
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/stories'
 *     responses:
 *       200:
 *         description: stories user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/stories'
 *   delete:
 *     tags:
 *       - stories
 *     summary: Delete a stories
 *     description: Delete a stories
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the stories
 *         schema:
 *           type: int
 *     responses:
 *       200:
 *         description: stories
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/stories'
 */
export default async (req, res) => {
	let {
		query: { id },
		body: data,
		method,
	} = req;

	id = parseInt(id);
	let stories;

	switch (method) {
		case 'GET':
			try {
				stories = await getStoryById(id);
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}
			break;
		case 'PATCH':
			if (!data) {
				res.status(400).json(errorCode.BadRequest);
				return;
			}

			try {
				stories = await updateStory(id, data);
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}
			break;
		case 'DELETE':
			try {
				stories = await deleteManyStory(id);
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}
			break;
		default:
			res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
			res.status(405).json(errorCode.MethodNotAllowed);
			return;
	}

	if (stories) {
		res.status(200).json({ success: true, rows: stories });
		return;
	}

	res.status(500).json(errorCode.InternalServerError);
};
