from .queries import Queries
from .queries import format_strings
from .filters import Filter
from .find_foods import find_foods

# queries has been modified to allow more matches
import joblib

recipes = joblib.load("recipes.pkl")

class Sort_recipe:
    # sort_by - {0: 'id', 1: 'rating', 2: 'total_time_in_second'}
    def __init__(self, recipe, sort_by=1, ascending=True):
        self.result = recipe
        self.sort_by = sort_by
        self.ascending = ascending

    def apply(self):

        if self.sort_by == 0:
            return self.result.sort_index(ascending=self.ascending)

        elif self.sort_by == 1:
            return self.result.sort_value(by='rating', ascending=self.ascending)

        elif self.sort_by == 2:
            return self.result.sort_value(by='totalTimeInSeconds', ascending=self.ascending)


class Show_page:
    def __init__(self, strings, sort_by=1, ascending=True, filters=None):
        # filters - a list of tuples of length 2,
           # example: [("rating", 4.0), ("cuisine", "Chinese"), ("course", "Desserts")]
        self.foods = find_foods(strings)
        self.sort_by = sort_by
        self.ascending = ascending
        self.filters = filters if filters is not None else []

        id_ = set()
        for food in self.foods:
            q = Queries(food)
            res = q.apply()
            id_ = id_.union(set(res.id.values))

        self.result = recipes[recipes.id.apply(lambda i: i in id_)]

        for flt in self.filters:
            if flt[0] == "rating":
                self.result = Filter(self.result, flt[0].lower(), float(flt[1])).apply()
            else:
                self.result = Filter(self.result, flt[0].lower(), format_strings(flt[1])).apply()

    def no_sorting(self):
        return self.result

    def apply(self):
        return Sort_recipe(self.no_sorting(), self.sort_by, self.ascending).apply()


