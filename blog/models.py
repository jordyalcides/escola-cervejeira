from django.db import models
from django.utils import timezone
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
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


class Beer(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    category = models.CharField(max_length=200)
    grade = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10)], default=0)
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


class Course(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    place = models.CharField(max_length=200)
    picture = models.ImageField(
            upload_to = "")
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
