from .queries import Queries
from .queries import format_strings
from .filters import Filter
from .find_foods import find_foods

# queries has been modified to allow more matches
import joblib

recipes = joblib.load("recipes.pkl")


def show(strings, sort_by=0, ascending=True, filters=None):
    sp = Show_page(find_foods(strings), filters)
    result = sp.apply()
    if sort_by == 0:
        return result.sort_index(ascending=ascending)

    elif sort_by == 1:
        return result.sort_value(by='rating', ascending=ascending)

    elif sort_by == 2:
        return result.sort_value(by='totalTimeInSeconds', ascending=ascending)


class Show_page:
    def __init__(self, foods, filters=None):
        self.foods = foods
        self.filters = filters if filters is not None else []

        id_ = set()
        for food in self.foods:
            q = Queries(food)
            res = q.apply()
            id_ = id_.union(set(res.id.values))

        self.result = recipes[recipes.id.apply(lambda i: i in id_)]

    def apply(self):

        for flt in self.filters:
            if self.result.empty:
                return self.result

            if flt[0] == "rating":
                self.result = Filter(self.result, flt[0].lower(), float(flt[1])).apply()
            else:
                self.result = Filter(self.result, flt[0].lower(), format_strings(flt[1])).apply()

        return self.result
