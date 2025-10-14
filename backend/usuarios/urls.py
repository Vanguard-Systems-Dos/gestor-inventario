from django.urls import path
from .views import UsuarioView, UsuarioDetalleView, LoginView

urlpatterns = [
    path("", UsuarioView.as_view(), name="usuarios"),
    path("<int:pk>/", UsuarioDetalleView.as_view(), name="usuario-detalle"),
    path("login/", LoginView.as_view(), name="login"),
]
