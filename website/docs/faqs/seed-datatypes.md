---
title: How do I set a column datatype for seeds?
---
dbt will infer the datatype for each column based on the data in your CSV. You can also explicitly set a datatype using the `column_types` [configuration](reference/column_types.md) like so:

<File name='dbt_project.yml'>

```yml
seed:
  offices:
    column_types:
      zip_code: varchar(5)
```

</File>
