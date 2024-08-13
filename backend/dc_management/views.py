from rest_framework import viewsets
from dc_management.models import *
from dc_management.serializers import *
from rest_framework.authentication import *
from rest_framework.permissions import *
from django.db.models import Q
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterSerializer, LoginSerializer
from django.contrib.auth import get_user_model
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, LoginSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class RegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    


class LoginViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response({
                'refresh': str(refresh),
                'access': access_token
            }, status=status.HTTP_200_OK)
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutViewSet(viewsets.ViewSet):
    def create(self, request):
        try:
            refresh_token = request.data.get('refresh')
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'Logout successful.'}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)


"""class DataCenterViewSet(viewsets.ModelViewSet):
    queryset = DataCenter.objects.all()
    serializer_class = DataCenterSerializer"""
    
"""class RackViewSet(viewsets.ModelViewSet):
    queryset = Rack.objects.all()
    serializer_class = RackSerializer

class DeviceViewSet(viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    
@api_view(['GET'])
def get_Active(request):
    active_devices = Device.objects.filter(Status='active')
    serializer = DeviceSerializer(active_devices, many=True)
    return Response(serializer.data)


   
class ServeurViewSet(viewsets.ModelViewSet):
    queryset = Serveur.objects.all()
    serializer_class = ServeurSerializer

    
    
class DeviceHistoryViewSet(viewsets.ModelViewSet):
    queryset = Device_history.objects.all()
    serializer_class = DeviceHistorySerializer

class VlanViewSet(viewsets.ModelViewSet):
    queryset = Vlan.objects.all()
    serializer_class = VlanSerializer

class PlageViewSet(viewsets.ModelViewSet):
    queryset = Plage.objects.all()
    serializer_class = PlageSerializer

class IPv4NetworksViewSet(viewsets.ModelViewSet):
    queryset = IPv4Networks.objects.all()
    serializer_class = IPv4NetworksSerializer

class CableViewSet(viewsets.ModelViewSet):
    queryset = Cable.objects.all()
    serializer_class = CableSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
class SwitchViewSet(viewsets.ModelViewSet):
    queryset = Switch.objects.all()
    serializer_class = SwitchSerializer

class RouteurViewSet(viewsets.ModelViewSet):
    queryset = Routeur.objects.all()
    serializer_class = RouteurSerializer

class FirewallViewSet(viewsets.ModelViewSet):
    queryset = Firewall.objects.all()
    serializer_class = FirewallSerializer

class VlanLinkViewSet(viewsets.ModelViewSet):
    queryset = Vlan_Link.objects.all()
    serializer_class = VlanLinkSerializer"""