#!/bin/bash

pbjs -t static-module -o generated/client.js -w commonjs tfplugin5.proto
pbts -o generated/client.d.ts generated/client.js
sed 's/|Long//' generated/client.d.ts > generated/client-filtered.d.ts
mv generated/client-filtered.d.ts generated/client.d.ts
prettier --write generated/client.d.ts generated/client.js
