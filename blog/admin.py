from django.contrib import admin
from .models import Post, Cerveja, Curso, Evento, Consultoria, Parceiro

class PostAdmin(admin.ModelAdmin):
    fields = ('autor', ('titulo', 'tag'), 'imagem', 'texto', 'data_de_publicacao')

admin.site.register(Post, PostAdmin)
admin.site.register(Cerveja)
admin.site.register(Curso)
admin.site.register(Evento)
admin.site.register(Consultoria)
admin.site.register(Parceiro)
