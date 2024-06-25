from django.urls import path
from .views import ForecastView

urlpatterns = [
    path('forecast/', ForecastView.as_view(), name='forecast'),
]
