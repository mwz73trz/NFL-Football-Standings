from rest_framework.serializers import ModelSerializer, StringRelatedField
from nfl_app.models import Division, Team

class DivisionSerializer(ModelSerializer):
    class Meta:
        model = Division
        fields = ['id', 'name', 'user', 'teams']
        depth = 1

    user = StringRelatedField()

class TeamSerializer(ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'