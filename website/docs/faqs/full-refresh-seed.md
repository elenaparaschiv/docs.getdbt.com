---
title: The columns of my seed changed, and now I can't rerun `seed`, what do I do?
---
If you changed the columns of your seed, you'll need to rerun the command with a `--full-refresh` flag, like so:
```
dbt seed --full-refresh
```

**Why is this the case?**


When you typically run dbt seed, dbt truncates the existing table and reinserts the data. This pattern avoids a `drop cascade` command, which may cause downstream objects (that your BI users might be querying!) to get dropped.

However, when column names are changed, or new columns are added, these statements will fail as the table structure has changed.

The `--full-refresh` flag will force dbt to `drop cascade` the existing table before rebuilding it.
