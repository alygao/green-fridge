## Queries to Recipes
 
----------------------------------------------------------------

**Function** `show(strings, sort_by=0, ascending=True, filters=None)`
- returns required recipes 

> strings: information on receipt, a list of strings

> sort_by: `int` in [1, 2, 3]. 
> - sort_by=0, sort_by "id",
> - sort_by=1: sort by "rating",
> - sort_by=2, sort by "cooking time"

> filters: a list of filter, presented in tuple `(<attribute>, <info>)`


##### 1. Class: Show_page
* fields: foods,  filters=None
* methods: 
   1.  `apply()` returns filtered recipes that contains foods


> strings: a list of strings which are food

> sort_by: `int` in [1, 2, 3]. 
> - sort_by=0, sort_by "id",
> - sort_by=1: sort by "rating",
> - sort_by=2, sort by "cooking time"

> filters: a list of filter, presented in tuple `(<attribute>, <info>)`

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

-----------------

* recipes dataset retrieved from [recipes.csv](https://www.kaggle.com/ajitrajput/foodrecipes)
