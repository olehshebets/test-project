-- CreateTable
CREATE TABLE "payout" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "payout_pkey" PRIMARY KEY ("id")
);
