/*
  Warnings:

  - You are about to alter the column `coordinate_x` on the `points_of_interest` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `coordinate_y` on the `points_of_interest` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_points_of_interest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "coordinate_x" INTEGER NOT NULL,
    "coordinate_y" INTEGER NOT NULL
);
INSERT INTO "new_points_of_interest" ("coordinate_x", "coordinate_y", "id", "name") SELECT "coordinate_x", "coordinate_y", "id", "name" FROM "points_of_interest";
DROP TABLE "points_of_interest";
ALTER TABLE "new_points_of_interest" RENAME TO "points_of_interest";
CREATE UNIQUE INDEX "points_of_interest_name_key" ON "points_of_interest"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
