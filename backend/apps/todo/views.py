from apps.todo.models import Todo
from apps.todo.serializers import TodoSerializer
from django.shortcuts import render
from rest_framework import viewsets


class TodoViewSet(viewsets.ModelViewSet):
    # viewsでserializersを渡す意味は？
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
