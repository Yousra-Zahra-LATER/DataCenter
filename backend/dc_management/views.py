from rest_framework import viewsets
from dc_management.models import *
from dc_management.serializers import *
from rest_framework.authentication import *
from rest_framework.permissions import *
from django.db.models import Q
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



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