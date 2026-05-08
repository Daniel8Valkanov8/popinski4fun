---
name: Next.js Node 24 generateBuildId fix
description: Node.js v24 causes generateBuildId undefined error in Next.js 14/15 build; requires patching node_modules/next/dist/build/index.js
type: project
---

Node.js v24.14.1 + Next.js 14.x/15.x have a bug where `config.generateBuildId` is `undefined` at build time, causing "TypeError: generate is not a function".

**Fix:** Patch `node_modules/next/dist/build/index.js` — find the string:
```
(0, _generatebuildid.generateBuildId)(config.generateBuildId, _indexcjs.nanoid)
```
Replace with:
```
(0, _generatebuildid.generateBuildId)(config.generateBuildId || (() => null), _indexcjs.nanoid)
```

**Why:** `loadConfig` strips function-type properties from the config object in certain Node 24 code paths, so `config.generateBuildId` comes back undefined even though `defaultConfig.generateBuildId = () => null` is defined.

**How to apply:** After every `npm install` or Next.js version update, re-apply this patch.
