---
title: Seed configurations
---

## Available configurations
```
[quote_columns](quote-columns.md): true | false
[enabled](enabled.md): true | false
schema: schema_name
pre-hook: sql-snippet
post-hook: sql-snippet
seed_name:
  column_types:
    column_name: column-type
```

## Configuring seeds
Seeds can only be configured from the `dbt_project.yml` file. To apply
configurations to all seeds, nest the configurations under the `seeds:` key:


```yml
seeds:

```
