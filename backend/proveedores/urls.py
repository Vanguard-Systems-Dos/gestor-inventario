from django.urls import path
from .views import ProveedorView

urlpatterns = [
    path('', ProveedorView.as_view(), name='proveedores'),
   
]
