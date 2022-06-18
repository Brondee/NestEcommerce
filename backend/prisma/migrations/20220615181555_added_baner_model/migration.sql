-- CreateTable
CREATE TABLE "Baner" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "isShown" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Baner_pkey" PRIMARY KEY ("id")
);
