-- CreateTable
CREATE TABLE "points_of_interest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "coordinate_x" BIGINT NOT NULL,
    "coordinate_y" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "points_of_interest_name_key" ON "points_of_interest"("name");
