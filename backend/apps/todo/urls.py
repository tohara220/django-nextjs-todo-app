from apps.todo.views import TodoViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

# 以下の2行はなんだろう？
router = DefaultRouter()
router.register(r"todos", TodoViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
