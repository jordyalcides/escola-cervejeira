from django import forms
from .models import Newsletter

class FormContato(forms.Form):
    nome = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    mensagem = forms.CharField(required=True, widget=forms.Textarea)

class NewsletterForm(forms.Form):
    email = forms.EmailField(required=True)
