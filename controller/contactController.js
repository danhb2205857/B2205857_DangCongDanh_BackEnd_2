import express from "express";
import Contact from "../models/contact";

export async function findAll(req, res) {
  const data = await Contact.find()

  return res.status(200).json({
    message: "Lấy danh sách contact thành công",
    data: data
  });
}
