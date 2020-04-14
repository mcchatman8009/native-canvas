#!/usr/bin/env bash
 set -e
rm -rf node_modules
npm install
npm run build
npm publish
