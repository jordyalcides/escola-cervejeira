from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^blog$', views.blog, name='blog'),
    url(r'^blog/post/(?P<pk>\d+)/$', views.blog_post, name='post'),
    url(r'^buscacerveja$', views.cervejas, name='cervejas'),
    url(r'^buscacerveja/cerveja/(?P<pk>\d+)/$', views.cerveja, name='cerveja'),
    url(r'^servicos$', views.servicos, name='servicos'),
    url(r'^servicos/ensino$', views.cursos, name='cursos'),
    url(r'^servicos/ensino/curso/(?P<pk>\d+)/$', views.curso, name='curso'),
    url(r'^servicos/eventos$', views.eventos, name='eventos'),
    url(r'^servicos/consultoria$', views.consultoria, name='consultoria'),
	url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^parceiros$', views.poi_list, name='parceiro'),


]
