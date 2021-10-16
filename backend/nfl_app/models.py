from django.db import models
from django.contrib.auth.models import User

class Division(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="divisions")

    def __str__(self):
        return f"{self.name}"

class Team(models.Model):
    team = models.CharField(max_length=254)
    wins = models.SmallIntegerField(default=0)
    losses = models.SmallIntegerField(default=0)
    ties = models.SmallIntegerField(default=0)
    division = models.ForeignKey(Division, on_delete=models.CASCADE, related_name="teams")

    def __str__(self):
        return f"{self.team}"
