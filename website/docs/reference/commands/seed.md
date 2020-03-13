---
title: "seed"
id: "seed"
---
## Description
The `dbt seed` command will load `csv` files located in the `data-paths` directory of your dbt project into your data warehouse.

## Options
| argument       | description                                                                                  |
|----------------|----------------------------------------------------------------------------------------------|
| --full-refresh | Drop existing seed tables and recreate them. Required when the columns of a seed file change |
| --models       | See [model selection syntax]()                                                               |

## Changelog
* [to-confirm] The `--models` flag was added in v0.16.0

## Examples
### Reload seeds when columns change

<File name='bash'>

```bash
$ dbt seed --full-refresh
```

</File>

### Load one seed only

<File name='bash'>

```bash
$ dbt seed --models country_codes
```

</File>

### Load all seeds in the `exclusion_lists` directory

<File name='bash'>

```bash
$ dbt seed --models exclusion_lists.*
```

</File>
