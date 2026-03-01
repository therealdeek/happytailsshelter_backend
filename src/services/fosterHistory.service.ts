import prisma from "../lib/prisma.js";

export async function getAllFosterHistoryRecords() {
  return prisma.foster_history.findMany();
}

export async function getFosterHistoryById(id: number) {
  return prisma.foster_history.findUnique({
    where: { foster_history_id: id },
  });
}
export async function getFosterHistoryByAnimalId(id: number) {
  return prisma.foster_history.findMany({
    where: { animal_id: id },
  });
}

export async function getFosterHistoryByUserd(id: number) {
  return prisma.foster_history.findUnique({
    where: { foster_history_id: id}
  });
}

// export async function getFosterHistoryByUserId(id: number) {
//   const safeId = Number(id);
//   if (isNaN(safeId)) {
//     throw new Error("Invalid user ID");
//   }
//   const fosterHistory = await prisma.$queryRaw`select*from foster_history Left join animal on foster_history.animal_id = animal.animal_id where foster_history.user_id=${safeId} order by animal.name`;
// }

export async function createFosterHistoryRecord(data: any) {
  return prisma.foster_history.create({
    data,
  });
}

export async function updateFosterHistoryRecord(id: number, data: any) {
  return prisma.foster_history.update({
    where: { foster_history_id: id },
    data: data,
  });
}

export async function deleteFosterHistory(id: number) {
  return prisma.foster_history.delete({
    where: { foster_history_id: id },
  });
}
