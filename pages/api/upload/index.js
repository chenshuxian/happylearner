import { errorCode } from '@/utils/errorCode';
import { uploadJSON } from '@/utils/upload';
import { createStory } from '@/libs/stories';

/**
 * @swagger
 * /api/upload:
 *   post:
 *     tags:
 *       - createStore 
 *     summary: Upload a json
 *     description: Upload a json
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: The Story
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               properties:
 *                 stories:
 *                   type: string
 *                   description: The stories 
 *                   example: 10
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json(errorCode.MethodNotAllowed);
    return;
  }

  return uploadJSON(req, res, createStory);
};

export const config = {
  api: {
    bodyParser: false,
  },
}