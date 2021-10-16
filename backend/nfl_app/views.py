from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from nfl_app.serializers import DivisionSerializer, TeamSerializer
from nfl_app.models import Division, Team

class DivisionViewSet(ModelViewSet):
    queryset = Division.objects.all()
    serializer_class = DivisionSerializer

class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
