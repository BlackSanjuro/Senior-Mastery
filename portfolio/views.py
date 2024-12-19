from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):


    return render(request, 'home.html', {})
    # return HttpResponse('Home page')



# Create your views here.
def progress(request):

    return render(request, 'culmination.html', {})

# Create your views here.
def creds(request):

    return render(request, 'resume.html', {})

# Create your views here.
def internship(request):

    return HttpResponse('AskMyrtle page')

