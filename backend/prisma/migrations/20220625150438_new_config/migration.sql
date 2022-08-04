/*
  Warnings:

  - The primary key for the `Visualization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Visualization` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visualization" (
    "visualization" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_Visualization" ("visualization") SELECT "visualization" FROM "Visualization";
DROP TABLE "Visualization";
ALTER TABLE "new_Visualization" RENAME TO "Visualization";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
