from rest_framework.routers import DefaultRouter
from .views import UnidadMedidaViewSet, MovimientoStockViewSet

router = DefaultRouter()
router.register(r'unidades-medida', UnidadMedidaViewSet)
router.register(r'movimientos-stock', MovimientoStockViewSet)

urlpatterns = router.urls
