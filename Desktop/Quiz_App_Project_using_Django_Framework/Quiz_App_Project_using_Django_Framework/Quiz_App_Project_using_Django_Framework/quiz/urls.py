from django.urls import path
import quiz.views as quiz_views

urlpatterns = [
    path('', quiz_views.qpage, name='qpage'),
]
