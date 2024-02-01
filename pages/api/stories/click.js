// pages/api/click.js
import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { storyId } = req.body;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 设置时间为当天的开始

    try {
      // 查找今天的记录
      let storyClick = await prisma.StoryClick.findFirst({
        where: {
          storyId: storyId,
          date: today
        }
      });

      if (storyClick) {
        // 如果记录存在，则增加点击数
        storyClick = await prisma.StoryClick.update({
          where: { id: storyClick.id },
          data: { clicks: { increment: 1 } }
        });
      } else {
        // 如果记录不存在，则创建新记录
        storyClick = await prisma.StoryClick.create({
          data: {
            storyId: storyId,
            date: today,
            clicks: 1
          }
        });
      }

      return res.status(200).json(storyClick);
    } catch (error) {
      console.error('Failed to record click:', error);
      return res.status(500).json({ error: "Failed to record click" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
