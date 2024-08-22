import json
import os
from django.core.management.base import BaseCommand
from recipes.models import Recipe
from django.conf import settings

class Command(BaseCommand):
    help = 'Load recipes from JSON file'

    def handle(self, *args, **kwargs):
        # Construct the absolute path to the JSON file
        json_file_path = os.path.abspath(os.path.join(settings.BASE_DIR, '..', '..', 'recipe_data.json'))

        self.stdout.write(f"Attempting to open file at: {json_file_path}")

        try:
            with open(json_file_path, 'r') as file:
                recipes = json.load(file)

            for recipe_data in recipes:
                Recipe.objects.create(
                    title=recipe_data['title'],
                    image=recipe_data['image'],
                    description=recipe_data['description'],
                    ingredients=recipe_data['ingredients'],
                    instructions=recipe_data['instructions'],
                    servings=recipe_data['servings'],
                    prep_time=recipe_data['prepTime'],
                    cook_time=recipe_data['cookTime'],
                    category=recipe_data['category'],
                    difficulty=recipe_data['difficulty']
                )

            self.stdout.write(self.style.SUCCESS('Successfully loaded recipes'))
        except FileNotFoundError:
            self.stdout.write(self.style.ERROR(f'Could not find file at {json_file_path}'))
        except json.JSONDecodeError:
            self.stdout.write(self.style.ERROR(f'Error decoding JSON from file at {json_file_path}'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'An error occurred: {str(e)}'))