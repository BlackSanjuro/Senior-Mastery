'''
YOU HAVE TO MAKE THIS FILE YOURSELF, WHICH MAPS URLS TO VIEWS

. JUST MEANS THE CURRENT FOLDER
OTHER IS SELF EXPLANITORY

'''

from django.urls import path
from . import views

# PATH PARAMETERS ARE THE URL PATH THE USER USES
# SECOND IS THE FUNCTION IN THE VIEWS FILE THAT SHOULD BE USED

# URL CONFIG
urlpatterns = [
    path('', views.home, name='home'),
    path('culmination/', views.progress, name='progress'),
    path('credentials/', views.creds, name='creds'),
    path('askmyrtle/', views.internship, name='internship')
]