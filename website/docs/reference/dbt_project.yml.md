
<Alert type='warning'>

This is a work in progress document. It has only been completed for seeds.

</Alert>


<File name='dbt_project.yml'>

```yml
name: string

version: string

profile: profilename

source-paths: [directorypath]
[data-paths](data-paths.md): [directorypath]
test-paths: [directorypath]
analysis-paths: [directorypath]
macro-paths: [directorypath]
snapshot-paths: [directorypath]

target-path: directorypath

clean-targets: [directorypath]

models:
  [<model-configs>](model-configs.md)

seeds:
  [<seed-configs>](seed-configs.md)

snapshots:
  [<snapshot-configs>](snapshot-configs.md)

on-run-start: sql-snippet
on-run-end: sql-snippet

```

</File>

Relevant links:
* [data-paths](data-paths.md)
