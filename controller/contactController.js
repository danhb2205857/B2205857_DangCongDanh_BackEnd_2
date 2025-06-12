import express from "express";

export function find(req, res) {
  return res.status(200).json({
    message: "Router đầu tiên",
  });
}
