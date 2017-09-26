#coding:utf-8
from django.shortcuts import render, get_object_or_404
from django.contrib import messages
from django.utils import timezone
from .models import Post, Cerveja, Curso, Evento, Cliente, Parceiro, Newsletter
from paginas.models import Contato
from .forms import FormContato, NewsletterForm
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template import Context
from django.template.loader import get_template
from django.http import HttpResponse

form_email = NewsletterForm

def create_newsletter(request):
    if request.method == 'POST':
        email = request.POST['email']

        Newsletter.objects.create(email = email)

        return HttpResponse('')

def index(request):
    posts = Post.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('data_de_publicacao')
    curso = Curso.objects.last()
    pois = Parceiro.objects.all()

    # Formulário de Contato
    form_class = FormContato
    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            nome = request.POST.get('nome', '')
            email = request.POST.get('email', '')
            mensagem = request.POST.get('mensagem', '')

            # Envia o email com as informações de contato
            template = get_template('contact_template.txt')
            context = Context({
                'nome': nome,
                'email': email,
                'mensagem': mensagem,
            })
            mensagem = template.render(context)

            email = EmailMessage(
                "Contato pelo site Escola Cervejeira",
                mensagem,
                "Escola Cervejeira"+'',
                [Contato.objects.last().email],
                headers = {'Responder': email}
            )
            email.send()
            return redirect('index')
    return render(request, 'index.html', {'posts': posts, 'curso': curso, 'form': form_class, 'form_email': form_email, 'pois': pois})

def blog(request):
    global form_email
    create_newsletter(request)
    posts = Post.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('-data_de_publicacao')
    return render(request, 'blog/blog.html', {'posts': posts,'form_email': form_email})

def blog_post(request, pk):
    global form_email
    create_newsletter(request)
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/blog-post.html', {'post': post,'form_email': form_email})

def cervejas(request):
    global form_email
    cervejas = Cerveja.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('nome')
    create_newsletter(request)
    return render(request, 'blog/beer-shop.html', {'cervejas': cervejas,'form_email': form_email})

def cerveja(request, pk):
    global form_email
    create_newsletter(request)
    cerveja = get_object_or_404(Cerveja, pk=pk)
    return render(request, 'blog/beer-shop-product.html', {'cerveja': cerveja,'form_email': form_email})

def servicos(request):
    global form_email
    create_newsletter(request)
    create_newsletter(request)
    return render(request, 'blog/services.html', {'form_email': form_email})

def cursos(request):
    global form_email
    create_newsletter(request)
    cursos = Curso.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('-data_de_publicacao')
    return render(request, 'blog/courses.html', {'cursos': cursos,'form_email': form_email})

def curso(request, pk):
    global form_email
    create_newsletter(request)
    curso = get_object_or_404(Curso, pk=pk)
    return render(request, 'blog/course.html', {'curso': curso,'form_email': form_email})

def eventos(request):
    global form_email
    create_newsletter(request)
    evento = Evento.objects.last()
    posts = Post.objects.filter(tag=True).order_by('-data_de_publicacao')
    return render(request, 'blog/events.html', {'posts': posts, 'evento': evento,'form_email': form_email})

def consultoria(request):
    global form_email
    create_newsletter(request)
    clientes = Cliente.objects.all().order_by('nome')
    return render(request, 'blog/consult.html', {'clientes': clientes,'form_email': form_email})

def newsletter(request):
    formEmail = NewsletterForm()
    return render(request, 'blog/newsletter.html', {'formEmail': formEmail})
