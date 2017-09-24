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

def index(request):
    posts = Post.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('-data_de_publicacao')
    curso = Curso.objects.last()
    # Formulário de Contato
    form_class = FormContato
    form_email = NewsletterForm
    if request.method == 'POST':
        form = form_class(data=request.POST)

        if 'button-email' in request.POST:
            form_mail = form_email(data=request.POST)
            if form_mail.is_valid():
                mail = request.POST.get('email',)
                new = Newsletter.objects.create()
                new.email = mail
                new.salvar
                messages.success(request, "Boa pedida!!")
                return redirect('index')
        else:
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
                messages.success(request, "Mensagem enviada!!")
                return redirect('index')

    return render(request, 'index.html', {'posts': posts, 'curso': curso, 'form': form_class, 'form_email': form_email})

def blog(request):
    posts = Post.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('-data_de_publicacao')
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

def servicos(request):
    return render(request, 'blog/service-list.html')

def cursos(request):
    cursos = Curso.objects.filter(data_de_publicacao__lte=timezone.now()).order_by('-data_de_publicacao')
    return render(request, 'blog/course-list.html', {'cursos': cursos})

def curso(request, pk):
    curso = get_object_or_404(Curso, pk=pk)
    return render(request, 'blog/course-single.html', {'curso': curso})

def eventos(request):
    evento = Evento.objects.last()
    posts = Post.objects.filter(tag=True).order_by('-data_de_publicacao')
    return render(request, 'blog/events.html', {'posts': posts, 'evento': evento})

def consultoria(request):
    clientes = Cliente.objects.all().order_by('nome')
    return render(request, 'blog/consult.html', {'clientes': clientes})

def poi_list(request):
    pois = Parceiro.objects.all()
    return render(request, 'blog/poi_list.html', {'pois': pois})

def newsletter(request):
    formEmail = NewsletterForm()
    return render(request, 'blog/newsletter.html', {'formEmail': formEmail})
