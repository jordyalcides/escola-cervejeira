from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^quem$', views.quem, name='quem'),
    url(r'^equipe$', views.equipe, name='equipe'),
    url(r'^membro$', views.membro, name='membro'),
    url(r'^galeria$', views.galeria, name='galeria'),

]
