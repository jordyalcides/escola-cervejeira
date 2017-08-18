from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^blog$', views.blog, name='blog'),
    url(r'^post(?P<pk>\d+)$', views.blog_post, name='post'),
    url(r'^gallery$', views.gallery, name='gallery'),
    url(r'^beershop$', views.beershop, name='beershop'),

]
