import joblib

recipes = joblib.load("recipes.pkl")

dataset_size = len(recipes)

import random
import pandas as pd


def format_strings(strin):
    return strin.title()


class Queries:
    def __init__(self, ingredient=str, query_type=1):
        # query_type - Int >= 0
        self.ingredient = ingredient
        self.query_type = query_type
        self.result = recipes

    def apply(self):

        if self.query_type == 1:  # ingredients
            self.result = self.query_based_on_ingredients()
            if len(self.result) < 4:
                tmp = self.result
                self.result = recipes
                self.ingredient = format_strings(self.ingredient)
                self.result = pd.concat([self.query_based_on_recipe_name(), tmp])

        else:  # recommended dishes
            random.seed(42)
            show_size = 20
            show = [random.randint(0, dataset_size) for i in range(show_size)]
            self.result = recipes.iloc[show]

        return self.result

    def query_based_on_recipe_name(self):
        return self.query_based_on_recipe_name_or_ingredients(1)

    def query_based_on_ingredients(self):
        return self.query_based_on_recipe_name_or_ingredients(0)

    def query_based_on_recipe_name_or_ingredients(self, tp):
        if tp == 1:
            self.result = self.result[self.result.recipeName.str.contains(self.ingredient)]
        else:
            self.result = self.result[
                self.result.ingredients.apply(lambda df: self.ingredient in ' '.join([str(elem) for elem in df]))]

        return self.result
