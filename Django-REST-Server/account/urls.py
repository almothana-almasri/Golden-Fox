from django.urls import path
from .views import SignUpAPIView


# from .views import SignUpView

urlpatterns = [
    # path("signup/", SignUpView.as_view(), name="signup"),
    path('signup/', SignUpAPIView.as_view(), name='signup')
    
]