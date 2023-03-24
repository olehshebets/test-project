-- CreateTable
CREATE TABLE "Traveller" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER,

    CONSTRAINT "Traveller_pkey" PRIMARY KEY ("id")
);
