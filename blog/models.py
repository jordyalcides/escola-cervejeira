from django.db import models
from django.utils import timezone
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator



class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    picture = models.ImageField(
            upload_to = "post/")
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


class Beer(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(default=0, max_digits=5, decimal_places=2)
    category = models.CharField(max_length=200)
    rating = models.DecimalField(default=0, max_digits=2, decimal_places=0, validators=[MinValueValidator(0), MaxValueValidator(10)])
    picture = models.ImageField(
            upload_to = "beer/")
    description = models.TextField(max_length=1000)
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


class Course(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    place = models.CharField(max_length=200)
    picture = models.ImageField(
            upload_to = "course/")
    description = models.TextField()
    start_date = models.DateTimeField()
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
