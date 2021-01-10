### Queries to Recipes
 
----------------------------------------------------------------

##### 1. Class: Show_page
* fields: strings, sort_by=1, ascending=True, filters=None
* methods: 
   1. `no_sorting()` returns unsorted recipes
   2.  `apply()` returns sorted recipes


> strings: information on receipt, a list of strings

> sort_by: `int` in [1, 2, 3]. 
> - sort_by=0, sort_by "id",
> - sort_by=1: sort by "rating",
> - sort_by=2, sort by "cooking time"

> filters: a list of Filter

##### 2. Class: Filter
* fields:  recipe_, attribute, info
* methods: 
    `apply()` returns filtered recipes


> recipe_: available recipe results

> attribute: `str` in ["rating", "course", "cuisine"] - type of filter

> info: the information that the filter is based on

##### 3. Class: Queries
* fields: ingredient=str, query_type=1
* methods: 
    `Queries.apply()` returns the recipe results which contains the ingredient
> query_type: `Int` in [0, 1]
> - query_type=0: query on recommended recipes
> - query_type=1: query on ingredients
