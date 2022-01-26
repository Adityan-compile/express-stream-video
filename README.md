# Express Stream Video

Express Stream Video is a Simple Video Streaming Package.

# Install

- npm i --save express-stream-video
- yarn add express-stream-video

## Example

```javascript
// streamController.js

const path = require("path");
const expressStreamVideo = require("express-stream-video");

exports.streamVideo = (req,res)=>{
  const filePath = path.join(__dirname, "sample.mp4");

  expressStreamVideo.stream(req,res,filePath, chunkSize=1000000);

};

```

# Params

| Param            | Default      | Required |
| ---------------- | ------------ | -------- |
| req              | {}           | true     |
| res              | {}           | true     |
| filePath         | ""           | true     |
| chunkSize(bytes) | 3mb(3000000) | false    |
