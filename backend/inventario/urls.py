from django.urls import path
from .views import ProductoView, ProductoDetalleView, CategoriaView

urlpatterns = [
    path('productos/', ProductoView.as_view(), name='productos'),
    path('productos/<int:pk>/', ProductoDetalleView.as_view(), name='producto-detalle'),
    path('categorias/', CategoriaView.as_view(), name='categorias'),
]
