---
title: How can I configure my seeds to be in a different directory?
---
Be default, dbt expects your seed files to be located in the `data` subdirectory
of your project.

To change this, use the [data-paths](reference/data-paths.md) configuration in your `dbt_project.yml`
file, like so:

<File name='dbt_project.yml'>

```yml
data-paths: ["seeds"]
```

</File>
