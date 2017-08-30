from django import forms

class FormContato(forms.Form):
    nome = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    mensagem = forms.CharField(required=True, widget=forms.Textarea)
