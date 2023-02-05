from authentication.models import User
from django.db import models


# Create your models here.


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name= 'user')
    comment = models.ForeignKey(User, on_delete=models.CASCADE, related_name= 'comment')
    text = models.CharField(max_length = 255)