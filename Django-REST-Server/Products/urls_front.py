from django.urls import path
from .views_front import (
    ProductCreateView,
    ProductDeleteView,
    ProductDetailView,
    ProductListView,
    ProductUpdateView,
)

urlpatterns = [
    path("", ProductListView.as_view(), name="Product_list"),
    path("<int:pk>/", ProductDetailView.as_view(), name="Product_detail"),
    path("create/", ProductCreateView.as_view(), name="Product_create"),
    path("<int:pk>/update/", ProductUpdateView.as_view(), name="Product_update"),
    path("<int:pk>/delete/", ProductDeleteView.as_view(), name="Product_delete"),
]
