from django.urls import path
from .views import UnidadMedidaViewSet, MovimientoStockViewSet

urlpatterns = [
    path('unidadmedida/', UnidadMedidaViewSet.as_view(), name='unidad-medidas'),
    path('/movimientos/', MovimientoStockViewSet.as_view(), name='movimientos'),
]

