/*
  Warnings:

  - A unique constraint covering the columns `[email,age]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_email_age_key" ON "User"("email", "age");
