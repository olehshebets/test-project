/*
  Warnings:

  - Added the required column `owe_traveller_id` to the `payout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payout" ADD COLUMN     "owe_traveller_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "payout" ADD CONSTRAINT "payout_owe_traveller_id_fkey" FOREIGN KEY ("owe_traveller_id") REFERENCES "traveller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
