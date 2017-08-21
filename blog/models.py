from django.db import models
from django.utils import timezone
from django.conf import settings


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    # picture = models.ImageField(
    #         upload_to = settings.MEDIA_ROOT)
    picture = models.ImageField(
            upload_to = "")
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    @property
    def picture_url(self):
        if self.picture and hasattr(self.picture, 'url'):
            return self.picture.url

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    def full_url(self):
        return settings.MEDIA_ROOT+"/"+ self.picture.url

class Beer(models.Model):
    name = models.CharField(max_length=200)
    price = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    picture = models.ImageField(
            upload_to = "")
    description = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    @property
    def picture_url(self):
        if self.picture and hasattr(self.picture, 'url'):
            return self.picture.url

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name
