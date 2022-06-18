/*
  Warnings:

  - Added the required column `productId` to the `cart items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart items" ADD COLUMN     "productId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "cart items" ADD CONSTRAINT "cart items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
