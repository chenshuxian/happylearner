import { createPage } from './pages';
import prisma from './prisma';

async function getStory() {
	try {
		const Story = await prisma.Story.findMany({
			orderBy: [{id: 'desc'}],
			select:{
				id:true,
				title:true,
				description:true,
				pages:{
					select:{
						subtitle:true,
						csubtitle:true
					}
				}
			}
		  });
		return Story;
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
}

async function getStoryById(id) {
	const Story = await prisma.Story.findUnique({
		where: {
			id,
		},
	});
	return Story;
}

async function createStory(data) {
	let pages = data.pages;
	delete data.pages; // 刪除story不要的pages資料
	let Page;
	try {
		const Story = await prisma.Story.create({
			data,
		});

		// console.log(Story)
		// story 成功新增後新增pages
		if(Story){
			Page = await createPage(pages, Story.id);
		}
		
		return Page;
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
}

// a bunch of Delete
async function deleteManyStory(id) {
	try {
		const Story = await prisma.Story.deleteMany({
			where: {
				id: { in: id },
			},
		});
		return Story;
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
}


async function updateStory(id, data) {
	// console.log(id);
	let result;
	try {
		result = await prisma.Story.update({
			where: {
				id,
			},
			data,
		});
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
	return result;
}

export {
	getStory,
	getStoryById,
	updateStory,
	createStory,
	deleteManyStory,
};
