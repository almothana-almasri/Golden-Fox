from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView, DetailView, UpdateView, CreateView, DeleteView
from django.urls import reverse_lazy
from .models import Product


class ProductListView(LoginRequiredMixin, ListView):
    template_name = "Products/Product_list.html"
    model = Product
    context_object_name = "Products"


class ProductDetailView(LoginRequiredMixin, DetailView):
    template_name = "Products/Product_detail.html"
    model = Product


class ProductUpdateView(LoginRequiredMixin, UpdateView):
    template_name = "Products/Product_update.html"
    model = Product
    fields = "__all__"


class ProductCreateView(LoginRequiredMixin, CreateView):
    template_name = "Products/Product_create.html"
    model = Product
    fields =  "__all__"  
    # ["name", "rating", "reviewer"] 


class ProductDeleteView(LoginRequiredMixin, DeleteView):
    template_name = "Products/Product_delete.html"
    model = Product
    success_url = reverse_lazy("Product_list")
