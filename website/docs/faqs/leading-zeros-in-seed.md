---
title: How do I preserve leading zeros in a seed?
---

From v0.16.0 onwards, using the `column_types` [configuration](reference/column_types.md) to set a column datatype will preserve leading zeros.

Prior to this version, the library that dbt uses to load CSVs would strip leading zeroes. If you're using an earlier version of dbt and experiencing this problem, we recommend that you either:
1. Upgrade to v0.16.0, or
2. Use a downstream model to pad the leading zeros back in using SQL, for example: `lpad(zipcode, 5, '0')`
