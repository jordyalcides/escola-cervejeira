from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post, Beer, Course

def index(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'index.html', {'posts': posts})

def blog(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/blog-with-sidebar.html', {'posts': posts})

def blog_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/blog_post.html', {'post': post})

def beershop(request):
    beers = Beer.objects.filter(published_date__lte=timezone.now()).order_by('name')
    return render(request, 'blog/features-beer-shop.html', {'beers': beers})

def product(request, pk):
    beer = get_object_or_404(Beer, pk=pk)
    return render(request, 'blog/features-beer-shop-product.html', {'beer': beer})

def courselist(request):
    courses = Course.objects.filter(published_date__lte=timezone.now()).order_by('name')
    return render(request, 'blog/event-list.html', {'courses': courses})

def course(request, pk):
    course = get_object_or_404(Course, pk=pk)
    return render(request, 'blog/event-single.html', {'course': course})

def services(request):
    return render(request, 'blog/features-services.html', {})

def who(request):
    return render(request, 'blog/features-who.html', {})

def staff(request):
    return render(request, 'blog/features-staff.html', {})

def member(request):
    return render(request, 'blog/features-staff-member-profile.html', {})

def gallery(request):
    return render(request, 'blog/gallery-cobbles.html', {})
