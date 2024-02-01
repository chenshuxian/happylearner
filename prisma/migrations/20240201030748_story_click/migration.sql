-- CreateTable
CREATE TABLE `StoryClick` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clicks` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `storyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StoryClick` ADD CONSTRAINT `StoryClick_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
