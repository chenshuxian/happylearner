import prisma from './prisma';

async function getPage() {
	try {
		const Page = await prisma.Page.findMany();
		return Page;
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
}

async function getPageById(id) {
	const Page = await prisma.Page.findUnique({
		where: {
			id,
		},
	});
	return Page;
}

async function createPage(data, storyId) {
	let Page, pgNum;
	try {
		for (const page of data) {
			pgNum = page.pageNumber +"";
			page.imageUrl = pgNum;
			page.audioUrl = pgNum;
			page.storyId = storyId;
			Page = await prisma.Page.create({
				data : page
			});
		}
		return Page;
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
}

// a bunch of Delete
async function deleteManyPage(id) {
	try {
		const Page = await prisma.Page.deleteMany({
			where: {
				id: { in: id },
			},
		});
		return Page;
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
}


async function updatePage(id, data) {
	// console.log(id);
	let result;
	try {
		result = await prisma.Page.update({
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
	getPage,
	getPageById,
	updatePage,
	createPage,
	deleteManyPage,
};
