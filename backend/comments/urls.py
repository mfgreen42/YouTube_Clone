from django.urls import path
from . import views


urlpatterns = {
    path('', views.video_comments),
    path('<str:video_id>/', views.get_comments_by_video),
    path('user/<str:video_id>/', views.user_comments)
}