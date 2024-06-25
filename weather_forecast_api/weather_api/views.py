from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests


class ForecastView(APIView):
    def get(self, request, *args, **kwargs):
        city = request.query_params.get('city')
        date = request.query_params.get('date')
        if not city or not date:
            return Response({"error": "City and date parameters are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Replace 'YOUR_API_KEY' with your actual API key for the weather service
        api_key = 'ce0fb73973354dd896a71321242506'
        weather_api_url = f"http://api.weatherapi.com/v1/forecast.json?key={api_key}&q={city}&dt={date}"

        try:
            response = requests.get(weather_api_url)
            response.raise_for_status()
            forecast_data = response.json()

            # Extract hourly forecast data for the requested date
            hourly_forecast = forecast_data['forecast']['forecastday'][0]['hour']

            # Return only the necessary hourly data
            hourly_data = [
                {
                    'time': hour['time'],
                    'temp_c': hour['temp_c'],
                    'precip_mm': hour['precip_mm'],
                    'wind_kph': hour['wind_kph']
                }
                for hour in hourly_forecast
            ]
            return Response({'forecast': {'forecastday': [{'hour': hourly_data}]}, 'current': forecast_data['current']}, status=status.HTTP_200_OK)
        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=status.HTTP_503_SERVICE_UNAVAILABLE)
