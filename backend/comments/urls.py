from django.urls import path
from . import views


urlpatterns = {
    path('', views.video_comments),
    path('pk/', views.get_comments_by_video)
}