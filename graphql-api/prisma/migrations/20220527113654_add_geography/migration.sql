-- CreateTable
CREATE TABLE "Geography" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Geography_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Geography_name_key" ON "Geography"("name");
