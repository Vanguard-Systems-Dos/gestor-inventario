from rest_framework.response import Response
from rest_framework.views import APIView as ApiView
from .models import UnidadMedida, MovimientoStock
from .serializers import UnidadMedidaSerializer, MovimientoStockSerializer

class UnidadMedidaViewSet(ApiView):
    def get(self, request):
        unidad_medidas = UnidadMedida.objects.all()
        serializer = UnidadMedidaSerializer(unidad_medidas, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = UnidadMedidaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class MovimientoStockViewSet(ApiView):
    queryset = MovimientoStock.objects.select_related('id_producto').all()
    serializer_class = MovimientoStockSerializer
