/*
  Warnings:

  - Added the required column `duration` to the `cart items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart items" ADD COLUMN     "duration" TEXT NOT NULL;
