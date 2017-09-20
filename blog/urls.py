from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^blog$', views.blog, name='blog'),
    url(r'^post/(?P<pk>\d+)/$', views.blog_post, name='post'),
    url(r'^buscacerveja$', views.cervejas, name='cervejas'),
    url(r'^cerveja/(?P<pk>\d+)/$', views.cerveja, name='cerveja'),
    url(r'^servicos$', views.servicos, name='servicos'),
    url(r'^ensino$', views.cursos, name='cursos'),
    url(r'^curso/(?P<pk>\d+)/$', views.curso, name='curso'),
    url(r'^eventos$', views.eventos, name='eventos'),
    # url(r'^evento/(?P<pk>\d+)/$', views.evento, name='evento'),
    url(r'^consultoria$', views.consultoria, name='consultoria'),
	url(r'^ckeditor/', include('ckeditor_uploader.urls')),

]
