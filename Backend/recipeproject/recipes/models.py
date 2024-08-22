from django.db import models

# Create your models here.
from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200, unique=True)
    image = models.URLField()
    description = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()
    servings = models.IntegerField()
    prep_time = models.CharField(max_length=50)
    cook_time = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title