from django.shortcuts import render
from rest_framework.views import APIView as ApiView
from inventario.models import Proveedor
from proveedores.serializers import ProveedorSerializers, Proveedor
from rest_framework.response import Response


# Create your views here.
class ProveedorView(ApiView):
    def get(self,request):
        proveedores = Proveedor.objects.all()
        serializer = ProveedorSerializers(proveedores, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ProveedorSerializers (data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    