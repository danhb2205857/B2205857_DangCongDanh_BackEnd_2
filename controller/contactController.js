import express from "express";
import Contact from "../models/contact";

export async function findAll(req, res) {
  const data = await Contact.find();

  return res.status(200).json({
    message: "Lấy danh sách contact thành công",
    data: data
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
    const { _id } = req.params;

    try {
        const data = await Contact.findById(_id);
        if (data) {
            return res.status(200).json({
                message: "Lấy contact thành công",
                data: data,
            });
        } else {
            return res.status(404).json({
                message: "Contact không tồn tại",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Lấy contact không thành công",
            error: error.message,
        });
    }
}

export async function update(req, res) {
    const { _id } = req.params;
    const updateData = req.body; 

    try {
        const data = await Contact.findById(_id);
        if (!data) {
            return res.status(404).json({
                message: "Contact không tồn tại",
            });
        }


        const updated = await Contact.updateOne(
            { _id: _id },
            { $set: updateData }
        );

        if (updated.modifiedCount > 0) {
            return res.status(200).json({
                message: "Cập nhật contact thành công",
            });
        } else {
            return res.status(400).json({
                message: "Không có thay đổi nào được thực hiện",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Cập nhật contact không thành công",
            error: error.message,
        });
    }
}
  export async function deleteById(req, res) {
    const { _id } = req.params;

    const data = await Contact.findById(_id);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Contact không tồn tại"
      });
    }

    const result = await Contact.deleteOne({ _id });

    if (!result || result.deletedCount === 0) {
      return res.status(500).json({
        message: "Xóa contact không thành công"
      });
    }

    return res.status(200).json({
      message: "Xóa contact thành công"
    });
}