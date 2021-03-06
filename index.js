const fs = require("fs");

exports.stream = (req={},res={},filePath="",chunkSize=3000000)=>{
  const range = req.headers.range;
  if (!range) {
  return res.status(400).json({
    status: 400,
    message: "Range Header is Required",
  });
}

  if (!fs.existsSync(filePath)) {
  return res.status(404).json({
    status: 404,
    message: "Video File not Found",
  });
}

const fileSize = fs.statSync(filePath).size;

const start = Number(range.replace(/\D/g, ""));
const end = Math.min(start + chunkSize, fileSize - 1);
const contentLength = end - start + 1;

res.writeHead(206, {
  "Accept-Ranges": "bytes",
  "Content-Type": "video/mp4",
  "Content-Length": contentLength,
  "Content-Range": `bytes ${start}-${end}/${fileSize}`
});

const videoStream = fs.createReadStream(filePath, { start, end });

videoStream.pipe(res);
};
