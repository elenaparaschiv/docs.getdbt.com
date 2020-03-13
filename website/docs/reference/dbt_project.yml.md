---
title: "Reference: dbt_project.yml"
id: dbt-project-yml
---

```yml
data-paths: [directorypath]

seeds:
  <a href="reference/quote_columns.md">quote_columns</a>: true | false
  enabled: true | false
  schema: schema_name
  pre-hook: sql-snippet
  post-hook: sql-snippet
  seed_name:
    column_types:
      column_name: column-type

```
☝️I need a way to make those links work. Let's pretend that the hyperlinks above work:
* [data-paths](data-paths.md) [Why doesn't this link work?!]
* [quote_columns](quote_columns.md)

Notes:
* Should these be like the faqs where they get rendered out a certain way?
