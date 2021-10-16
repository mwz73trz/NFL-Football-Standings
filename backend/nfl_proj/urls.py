from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('nfl_app.urls')),
    path('login/', include('nfl_auth.urls')),
]
