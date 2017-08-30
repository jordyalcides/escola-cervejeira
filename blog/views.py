from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post, Cerveja, Curso
from paginas.models import Contato

def base_home(request):
    contato = Contato.objects.last()
    return render(request, 'blog/base_home.html', {'contato': contato})

def index(request):
    posts = Post.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('data_de_publicacao')
    curso = Curso.objects.last()
    return render(request, 'index.html', {'posts': posts, 'curso': curso})

def blog(request):
    posts = Post.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('data_de_publicacao')
    return render(request, 'blog/blog-with-sidebar.html', {'posts': posts})

def blog_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/blog_post.html', {'post': post})

def cervejas(request):
    cervejas = Cerveja.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('nome')
    return render(request, 'blog/features-beer-shop.html', {'cervejas': cervejas})

def cerveja(request, pk):
    cerveja = get_object_or_404(Cerveja, pk=pk)
    return render(request, 'blog/features-beer-shop-product.html', {'cerveja': cerveja})

def cursos(request):
    cursos = Curso.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('nome')
    return render(request, 'blog/event-list.html', {'cursos': cursos})

def curso(request, pk):
    curso = get_object_or_404(Curso, pk=pk)
    return render(request, 'blog/event-single.html', {'curso': curso})
