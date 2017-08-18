from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post

def index(request):
    return render(request, 'index.html', {})

def blog(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/blog-with-sidebar.html', {'posts': posts})

def blog_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/blog_post.html', {'post': post})

def beershop(request):
    return render(request, 'blog/features-beer-shop.html', {})

def gallery(request):
    return render(request, 'blog/gallery-cobbles.html', {})
