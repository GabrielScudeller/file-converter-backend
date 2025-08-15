import { Request, Response } from "express";

export const handleUpload = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "Arquivo não enviado" });
  }

  const buffer = req.file.buffer;
  const originalName = req.file.originalname;
  const mimeType = req.file.mimetype;

  res.set({
    "Content-Type": mimeType,
    "Content-Disposition": `attachment; filename="${originalName}"`,
  });
  return res.send(buffer);
};
