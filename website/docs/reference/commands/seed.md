---
title: "seed"
id: "seed"
---
## Description
The `dbt seed` command will load `csv` files located in the `data-paths` directory of your dbt project into your data warehouse.

## Options
| argument       | description                                 |
|----------------|---------------------------------------------|
| --full-refresh | Drop existing seed tables and recreate them |

## Examples
<File name='bash'>

```bash
$ dbt seed --full-refresh
```

</File>
