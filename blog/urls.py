from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^blog$', views.blog, name='blog'),
    url(r'^post/(?P<pk>\d+)/$', views.blog_post, name='post'),
    url(r'^beershop$', views.beershop, name='beershop'),
    url(r'^product/(?P<pk>\d+)/$', views.product, name='product'),
    url(r'^services$', views.services, name='services'),
    url(r'^who$', views.who, name='who'),
    url(r'^staff$', views.staff, name='staff'),
    url(r'^member$', views.member, name='member'),
    url(r'^gallery$', views.gallery, name='gallery'),

]
