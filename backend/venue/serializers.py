from rest_framework import serializers
from .models import Venue
from rest_framework import serializers
from .models import Venue, Rating, Question
from django.db.models import Avg

class VenueSerializer(serializers.ModelSerializer):
    sport = serializers.SlugRelatedField(many=True, read_only=True, slug_field='sport_name')
    avg_rating = serializers.SerializerMethodField()
    class Meta:
        model = Venue
        fields = '__all__'

    def get_avg_rating(self, venue):
        avg_rating = Rating.objects.filter(venue=venue).aggregate(Avg('rating')).get('rating__avg')
        return avg_rating

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

