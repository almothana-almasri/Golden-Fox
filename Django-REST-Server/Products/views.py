from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework import viewsets
from .models import Product,Category,Comment,Favourite_product
from .permissions import IsOwnerOrReadOnly,IsOwnerOnly
from .serializers import ProductSerializer,CategorySerializer,CommentSerializer,Fav_productSerializer

 #1
class ProductList(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



 #2
class CategoryList(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer




 #3
class CommentList(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer



 #4
class Favourite_productList(ListCreateAPIView):
    permission_classes = (IsOwnerOnly,)
    queryset = Favourite_product.objects.all()
    serializer_class = Fav_productSerializer


class Favourite_productDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOnly,)
    queryset = Favourite_product.objects.all()
    serializer_class = Fav_productSerializer

# class Favourite_productList(ListCreateAPIView):
#     permission_classes = [IsOwnerOnly]
#     queryset = Favourite_product.objects.all()
#     serializer_class = Fav_productSerializer


# class Favourite_productDetail(RetrieveUpdateDestroyAPIView):
#     permission_classes = [IsOwnerOnly]
#     queryset = Favourite_product.objects.all()
#     serializer_class = Fav_productSerializer


