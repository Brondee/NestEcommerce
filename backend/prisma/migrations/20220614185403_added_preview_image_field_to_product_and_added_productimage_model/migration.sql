-- AlterTable
ALTER TABLE "products" ADD COLUMN     "previewImage" TEXT NOT NULL DEFAULT E'https://i.pinimg.com/originals/8e/21/73/8e2173a6a4fec900d8374752fc0c1b9c.jpg';

-- CreateTable
CREATE TABLE "product images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "product images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product images" ADD CONSTRAINT "product images_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
