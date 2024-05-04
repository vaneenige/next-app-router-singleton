// @ts-nocheck
import React from "react";

export default React.cache(async () => {
  if (!globalThis.shiki) {
    console.log('Create random');
    globalThis.shiki = Math.random();
  }
  return globalThis.shiki as number;
});
