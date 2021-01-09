import joblib

recipes = joblib.load("recipes.pkl")

class Queries:
    def __init__(self, query_type, sort_by=1, support_info=None, *filters):
        # sort_by - {0: 'id', 1: 'rating', 2: 'total_time_in_second', 3: # of ingredients}
        self.query_type = query_type
        self.sort_by = sort_by
        self.info = support_info
        self.filters = filters
        
    def apply(self):
        result = None

        if self.query_type == 0: # recipeName
            pass
        elif self.query_type == 1: # course
            pass
        elif self.query_type == 2: # ingredients
            pass
        else: # recommended dishes
            pass

        pass # call sort_by decorator
        for flt in self.filters:
            pass # call each filter decorators

        return result

    def rating_filter(self, threshold): # return result of rating > threshold
        pass

    def cuisine_filter(self, cuisine):
        pass

    def query_based_on_recipe_name_or_ingredients (self, *food_name):
        pass

    def query_based_on_course (self, *course):
        pass

