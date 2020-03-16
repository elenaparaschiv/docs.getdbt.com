## Definition
Optionally specify a custom schema for a [model](docs/docs/building-a-dbt-project/building-models.md) or [seed](docs/docs/building-a-dbt-project/seeds.md).

* If no custom schema is specified, the model or seed is built in the target schema.
* If a custom schema is specified, by default, the  model or seed will be built in a schema named `{{ target.schema }}_{{ schema }}`.

To learn more about changing this behavior, read [Using Custom Schemas](docs/docs/building-a-dbt-project/building-models/using-custom-schemas.md)

## Usage

### Models

Configure groups of models from the `dbt_project.yml` file.

<File name='dbt_project.yml'>

```
models:
  schema: marketing
```

</File>

Configure individual models using a config block:

<File name='models/my_model.sql'>

```sql
{{ config(
    schema='marketing'
) }}
```

</File>

### Seeds
<File name='dbt_project.yml'>

```
seeds:
  schema: schema_name
```

</File>
