from django.urls import re_path, include, path
from django.contrib import admin
from myquiz import views as index_views
from rest_framework.urlpatterns import format_suffix_patterns
from quizapi import views

urlpatterns = [
    path('', index_views.index, name='index'),
    path('login/', index_views.login, name='login'),
    path('questions/', include('quiz.urls')),
    path('quizapi/', views.QuizApiList.as_view(), name='quizapi'),
    path('admin/', admin.site.urls),
]

urlpatterns = format_suffix_patterns(urlpatterns)
