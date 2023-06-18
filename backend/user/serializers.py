from .models import User, Sport
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class UserSerializer(serializers.ModelSerializer):
    sport = serializers.SlugRelatedField(many=True, read_only=True, slug_field='sport_name')
    class Meta:
        model = User
        # fields = '__all__'
        exclude = ['password']

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = '__all__'

class SignupSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(
        max_length=50, min_length=3, required=True)
    last_name = serializers.CharField(
        max_length=50, min_length=3, required=True)
    city = serializers.CharField(max_length=50, min_length=3, required=True)
    phone_number = serializers.CharField(
        max_length=15, min_length=6, required=True)
    username = serializers.CharField(
        max_length=25, min_length=3, required=True)
    email = serializers.EmailField(max_length=50, required=True)
    password = serializers.CharField(
        min_length=6, max_length=25, write_only=True, required=True)


    class Meta:
        model = User
        fields = ('username', 'email', 'password',
                  'first_name', 'last_name', 'city', 'phone_number', )

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data.get('email', ''),
            password=validated_data.get('password', ''),
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            city=validated_data.get('city', ''),
            username=validated_data.get('username', ''),
            phone_number=validated_data.get('phone_number', ''),
        )

        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['role'] = user.role
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name

        return token
