from django.contrib import admin
from .models import Post, Cerveja, Curso, Evento, Cliente, Parceiro, Newsletter

class PostAdmin(admin.ModelAdmin):
    fields = ('autor', ('titulo', 'tag'), 'imagem', 'texto', 'data_de_publicacao')


class ParceiroAdmin(admin.ModelAdmin):
    # regular stuff
    class Media:
        js = (
            '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', # jquery
            'js/busca_mapa.js',       # project static folder
        )

admin.site.register(Post, PostAdmin)
admin.site.register(Cerveja)
admin.site.register(Curso)
admin.site.register(Evento)
admin.site.register(Parceiro, ParceiroAdmin)
admin.site.register(Cliente)
admin.site.register(Newsletter)
