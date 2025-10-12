from rest_framework import viewsets
from .models import UnidadMedida, MovimientoStock
from .serializers import UnidadMedidaSerializer, MovimientoStockSerializer

class UnidadMedidaViewSet(viewsets.ModelViewSet):
    queryset = UnidadMedida.objects.all()
    serializer_class = UnidadMedidaSerializer


class MovimientoStockViewSet(viewsets.ModelViewSet):
    queryset = MovimientoStock.objects.select_related('id_producto').all()
    serializer_class = MovimientoStockSerializer
