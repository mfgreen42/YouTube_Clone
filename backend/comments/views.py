from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Comment
from .serializer import CommentSerializer
from django.shortcuts import get_list_or_404
from .models import Comment


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def video_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many = True)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video(request, pk):
    comments = get_list_or_404(Comment, pk=pk)
    if request.method == 'GET':
        serializer = CommentSerializer(comments) 
        return Response(serializer.data)       
    
