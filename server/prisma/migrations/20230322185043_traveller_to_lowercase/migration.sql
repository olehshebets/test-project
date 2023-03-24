/*
  Warnings:

  - You are about to drop the `Traveller` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Traveller";

-- CreateTable
CREATE TABLE "traveller" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER,

    CONSTRAINT "traveller_pkey" PRIMARY KEY ("id")
);
