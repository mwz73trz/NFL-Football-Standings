from django.db import router
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DivisionViewSet, TeamViewSet

router = DefaultRouter()
router.register("divisions", DivisionViewSet, basename="division")
router.register("teams", TeamViewSet, basename="team")

urlpatterns = [
    path('', include(router.urls)),
]