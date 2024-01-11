---
marp: true
title: Short and sweet Renovate intro
description: Short and sweet Renovate intro
theme: uncover
paginate: true
_paginate: false



---

# Short and sweet

## Renovate (bot) intro

---

# Intro, reason & background

  * Keeping dependencies up-to-date is hard/ a lot of effort depending on project size
  * `LATEST` yields non-reproducible builds
  * Log4Shell, etc.

---

# Maven

See demo1-maven

<!-- mvn versions:display-dependency-updates -->

---

# Renovate + GitHub

See demo2-renovate

<!--
docker run --rm -v "$(pwd)/config.js:/usr/src/app/config.js" -e RENOVATE_TOKEN=${TOKEN} renovate/renovate
 -->

---

# Renovate + Azure DevOps

See project demo (off-the-record)

---

# Links

* https://docs.renovatebot.com/

---

# Q&A