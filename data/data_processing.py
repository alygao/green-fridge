import pandas as pd

# Data_processing

recipes = pd.read_csv("recipes.csv", encoding="US_ASCII")

recipes.drop("id", axis=1)

recipes["id"] = [i for i in range(1, len(recipes) + 1)]


def split_strings(strin):
    s = str(strin).replace("[", "").replace("]", "").replace("?", "")
    return s.split(", ")


recipes["ingredients"] = recipes["ingredients"].apply(split_strings)
recipes["course"] = recipes["course"].apply(split_strings)
recipes["cuisine"] = recipes["cuisine"].apply(split_strings)

# ------------------------------------------------------------
# Storing processed dataset 

import joblib

joblib.dump(recipes, "recipes.pkl")
