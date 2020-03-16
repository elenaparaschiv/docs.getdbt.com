<Alert type='warning'>

This is a work in progress document. While this configuration applies to multuple resource types, the documentation has only been written for seeds.

</Alert>


## Description
A SQL statement to be run after a model is created / a seed is updated.

Post-hooks can also call macros that return SQL statements.

## Examples
### Grant select privileges on a seed

<File name='dbt_project.yml'>

```yml

seeds:
  post-hook: "grant select on {{ this }} to group reporter"

```

</File>
