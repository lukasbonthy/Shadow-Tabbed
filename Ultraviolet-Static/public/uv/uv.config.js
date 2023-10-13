// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "https://math.madroid.design/uv/service/",
  bare: "https://math.madroid.design/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "https://math.madroid.design/uv/uv.handler.js",
  client: "https://math.madroid.design/uv/uv.client.js",
  bundle: "https://math.madroid.design/uv/uv.bundle.js",
  config: "https://math.madroid.design/uv/uv.config.js",
  sw: "https://math.madroid.design/uv/uv.sw.js",
};
