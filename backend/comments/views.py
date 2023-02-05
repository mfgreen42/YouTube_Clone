from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Comment
from .serializer import CommentSerializer


# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video(request):
    if request.method == 'GET':
        comments = Comment.objects.filter(video_id = request.video_id.id)
        serializer = CommentSerializer(comments, many=True) 
        return Response(serializer.data)       