## Definition
Optionally specify a custom list of directories where [seed](docs/building-a-dbt-project.md) files are located.

* Default: `data-paths: ["data"]`

## Usage
<File name='dbt_project.yml'>

```yml
data-paths: ["data"]
```

</File>

## Examples
### Co-locate your models and seeds in the `models` directory

<File name='dbt_project.yml'>

```yml
data-paths: ["models"]
model-paths: ["models"]
```

</File>