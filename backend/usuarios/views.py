from django.shortcuts import get_object_or_404
from rest_framework.views import APIView as ApiView
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario, Sesion
from .serializers import UsuarioSerializer
from datetime import timedelta
from django.utils import timezone


class UsuarioView(ApiView):
    def get(self, request):
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsuarioDetalleView(ApiView):
    def get(self, request, pk):
        usuario = get_object_or_404(Usuario, pk=pk)
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)

    def put(self, request, pk):
        usuario = get_object_or_404(Usuario, pk=pk)
        serializer = UsuarioSerializer(usuario, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        usuario = get_object_or_404(Usuario, pk=pk)
        usuario.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class LoginView(ApiView):
    def post(self, request):
        dni = request.data.get("dni")
        password = request.data.get("password")
        usuario = Usuario.objects.filter(dni=dni, activo=True).first()

        if usuario and usuario.check_password(password):
            # Crear sesión válida por 1 hora
            sesion = Sesion.objects.create(
                usuario=usuario, fecha_expiracion=timezone.now() + timedelta(hours=1)
            )

            data = {
                "id_usuario": usuario.id_usuario,
                "nombre": usuario.nombre,
                "dni": usuario.dni,
                "rol": usuario.rol,
                "token": str(sesion.token),
                "fecha_expiracion": sesion.fecha_expiracion,
            }
            return Response(data, status=status.HTTP_200_OK)

        return Response(
            {"detail": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED
        )
