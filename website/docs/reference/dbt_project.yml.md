---
title: "Reference: dbt_project.yml"
id: dbt-project.yml
---

```yml
name: string

version: string

profile: profilename

source-paths: [directorypath]
[data-paths](data-paths.md): [directorypath]
test-paths: [directorypath]
analysis-paths: [directorypath]
macro-paths: [directorypath]
snapshot-paths: [directorypath]

target-path: directorypath

clean-targets: [directorypath]

models:
  [<model-configs>](model-configs.md)

seeds:
  [<seed-configs>](seed-configs.md)

snapshots:
  [<snapshot-configs>](snapshot-configs.md)

```
☝️I need a way to make those links work. Let's pretend that the hyperlinks above work:
* [data-paths](data-paths.md) [Why doesn't this link work?!]
* [quote_columns](quote_columns.md)
* Do we add the quoting configs here?

Notes:
* Should these be like the faqs where they get rendered out a certain way?
