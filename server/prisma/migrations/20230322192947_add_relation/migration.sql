/*
  Warnings:

  - Added the required column `travellerId` to the `payout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payout" ADD COLUMN     "travellerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "payout" ADD CONSTRAINT "payout_travellerId_fkey" FOREIGN KEY ("travellerId") REFERENCES "traveller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
