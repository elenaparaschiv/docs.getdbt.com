---
title: Seed configurations
---

## Available configurations

* [quote_columns](quote-columns.md): true | false
* [enabled](enabled.md): true | false
* [schema](schema.md): string
* [pre-hook](pre-hook.md): sql-statement
* [post-hook](post-hook.md): sql-statement
* [column_types](column_types.md): {column_name: datatype}

## Configuring seeds
Seeds can only be configured from the `dbt_project.yml` file.

To apply
configurations to all seeds, nest the configurations under the `seeds:` key. For a project with:
* `name: jaffle_shop`
* A seed file at `data/country_codes.csv`, and
* A seed file at `data/marketing/utm_parameters.csv`

<File name='dbt_project.yml'>

```yml

seeds:
  jaffle_shop:
    enabled: true
    schema: seed_data
    # This configures data/country_codes.csv
    country_codes:
      # Override column types
      column_types:
        country_code: varchar(2)
        country_name: varchar(32)
    marketing:
      schema: marketing # this will take precedence
```

</File>

Seed configurations, like model configurations, are applied hierarchically — configurations applied to the `marketing` subdirectory will take precedence over configurations applied to the entire `jaffle_shop` project.
