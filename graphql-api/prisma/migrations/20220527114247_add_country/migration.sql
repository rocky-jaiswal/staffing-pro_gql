-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "geographyId" INTEGER NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_geographyId_fkey" FOREIGN KEY ("geographyId") REFERENCES "Geography"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
