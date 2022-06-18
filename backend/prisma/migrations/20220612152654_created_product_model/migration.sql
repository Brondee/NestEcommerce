-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "players" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "pricePerDay" INTEGER NOT NULL,
    "pricePerWeek" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
