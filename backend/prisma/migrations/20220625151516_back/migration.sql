/*
  Warnings:

  - The primary key for the `Visualization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Visualization` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visualization" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "visualization" INTEGER NOT NULL
);
INSERT INTO "new_Visualization" ("visualization") SELECT "visualization" FROM "Visualization";
DROP TABLE "Visualization";
ALTER TABLE "new_Visualization" RENAME TO "Visualization";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
