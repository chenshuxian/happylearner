/*
  Warnings:

  - A unique constraint covering the columns `[storyId,date]` on the table `StoryClick` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `StoryClick` MODIFY `clicks` INTEGER NOT NULL DEFAULT 1,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `StoryClick_storyId_date_key` ON `StoryClick`(`storyId`, `date`);
