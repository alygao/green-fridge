
class Filter:
    def __init__(self, recipe_, attribute, info):
        self.result = recipe_
        self.attr = attribute
        self.info = info

    def apply(self):
        if self.attr == "rating":
            self.result = self.rating_filter()
        elif self.attr == "course":
            self.result = self.course_filter()
        else:
            self.result = self.cuisine_filter()

        return self.result

    def rating_filter(self):  # return self.result of rating > threshold
        threshold = self.info
        self.result.rating.fillna(4.0, inplace=True)
        return self.result.query('rating >= @threshold')

    def course_filter(self):
        return self.result[self.result.course.apply(lambda df: self.info in df)]

    def cuisine_filter(self):
        return self.result[self.result.cuisine.apply(lambda df: self.info in df)]
