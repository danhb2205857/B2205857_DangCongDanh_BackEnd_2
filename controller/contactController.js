import express from "express";
import Contact from "../models/contact";

export async function findAll(req, res) {
  const data = await Contact.find();

  return res.status(200).json({
    message: "Lấy danh sách contact thành công",
    data: data,
  });
}

export async function create(req, res) {
  const contact = await Contact.insertOne(req.body);

  if (contact) {
    return res.status(201).json({
      message: "Thêm contact thành công",
      data: contact,
    });
  } else {
    return res.status(500).json({
      message: "Thêm contact không thành công",
    });
  }
}

export async function deleteAll(req, res) {
  const data = await Contact.deleteMany();

  if (data) {
    return res.status(200).json({
      message: "Xoá contact thành công",
    });
  } else {
    return res.status(500).json({
      message: "Xoá contact không thành công",
    });
  }
}
  export async function findFavorite(req, res) {
    const data = await Contact.find({ favorite: true });

    return res.status(200).json({
      message: "Lấy danh sách contact thành công",
      data: data,
    });
  }

  export async function findByPk(req, res) {
    const { _id } = req.params

    const data = await Contact.find({ _id: _id });

    if(data){
      return res.status(200).json({
      message: "Lấy contact thành công",
      data: data,
    });
    }
    else {
      return res.status(500).json({
      message: "Lấy contact không thành công"
    });
    }
    
  }
