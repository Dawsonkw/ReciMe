from django.core.management.base import BaseCommand
from recipes.models import Recipe

class Command(BaseCommand):
    help = 'Remove duplicate recipes by title'

    def handle(self, *args, **kwargs):
        seen_titles = set()
        duplicates = []
        for recipe in Recipe.objects.all():
            if recipe.title in seen_titles:
                duplicates.append(recipe)
            else:
                seen_titles.add(recipe.title)
        
        for duplicate in duplicates:
            duplicate.delete()
        
        self.stdout.write(self.style.SUCCESS('Successfully removed duplicate recipes'))