from django.urls import path
from .views import ProductList, ProductDetail, CategoryList ,CategoryDetail, CommentDetail, CommentList, Favourite_productDetail, Favourite_productList

urlpatterns = [
    path("", ProductList.as_view(), name="Product_list"),
    path("<int:pk>/", ProductDetail.as_view(), name="Product_detail"),
    path("category", CategoryList.as_view(), name="Category_list"),
    path("category/<int:pk>/", CategoryDetail.as_view(), name="Category_detail"),
    path("comment", CommentList.as_view(), name="Comment_list"),
    path("comment/<int:pk>/", CommentDetail.as_view(), name="Comment_detail"),
    path("Favourite_product", Favourite_productList.as_view(), name="Favourite_product_list"),
    path("Favourite_product/<int:pk>/", Favourite_productDetail.as_view(), name="Favourite_product_detail"),


]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
