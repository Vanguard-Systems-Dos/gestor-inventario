from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario, Sesion
from .serializers import UsuarioSerializer, SesionSerializer
from datetime import timedelta
from django.utils import timezone


class UsuarioView(APIView):
    def get(self, request):
        usuarios = Usuario.objects.filter(activo=True)
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsuarioDetalleView(APIView):
    def get(self, request, pk):
        usuario = get_object_or_404(Usuario, pk=pk, activo=True)
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)

    def put(self, request, pk):
        usuario = get_object_or_404(Usuario, pk=pk, activo=True)
        serializer = UsuarioSerializer(usuario, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        usuario = get_object_or_404(Usuario, pk=pk, activo=True)
        usuario.activo = False
        usuario.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return Response(
                {"detail": "Email y contraseña son requeridos."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        usuario = Usuario.objects.filter(email=email, activo=True).first()

        if usuario and usuario.check_password(password):
            sesion = Sesion.objects.create(
                usuario=usuario,
                fecha_expiracion=timezone.now() + timedelta(hours=1),
            )

            data = {
                "id_usuario": usuario.id_usuario,
                "nombre": usuario.nombre,
                "email": usuario.email,
                "rol": usuario.rol,
                "token": str(sesion.token),
                "fecha_expiracion": sesion.fecha_expiracion,
            }

            return Response(data, status=status.HTTP_200_OK)

        return Response(
            {"detail": "Credenciales inválidas."},
            status=status.HTTP_401_UNAUTHORIZED,
        )
