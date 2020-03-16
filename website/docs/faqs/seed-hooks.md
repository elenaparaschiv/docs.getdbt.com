---
title: Do hooks run with seeds?
---

It varies:
- [pre-hooks](reference/pre-hooks.md) and [post-hooks](reference/post-hooks.md) can be configured for seeds in your `dbt_project.yml` file.
- `on-run-start` and `on-run-end` hooks are **not** available for seeds.
