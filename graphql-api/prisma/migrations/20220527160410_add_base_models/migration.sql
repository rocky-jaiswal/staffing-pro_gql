-- CreateTable
CREATE TABLE "Industry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verticals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Verticals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Industry_name_key" ON "Industry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Verticals_name_key" ON "Verticals"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");
