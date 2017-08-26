from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^blog$', views.blog, name='blog'),
    url(r'^post/(?P<pk>\d+)/$', views.blog_post, name='post'),
    url(r'^buscacerveja$', views.cervejas, name='cervejas'),
    url(r'^cerveja/(?P<pk>\d+)/$', views.cerveja, name='cerveja'),
    url(r'^cursos$', views.cursos, name='cursos'),
    url(r'^curso/(?P<pk>\d+)/$', views.curso, name='curso'),
    url(r'^servicos$', views.servicos, name='servicos'),
    url(r'^quem$', views.quem, name='quem'),
    url(r'^equipe$', views.equipe, name='equipe'),
    url(r'^membro$', views.membro, name='membro'),
    url(r'^galeria$', views.galeria, name='galeria'),

]
