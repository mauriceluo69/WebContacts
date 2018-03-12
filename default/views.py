from django.shortcuts import render, redirect
from default.models import People
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import time


@login_required
def getList(request):
    return render(request, 'contacts.html', {'people': People.objects.all()})


@login_required
def addList(request):
    if request.method == 'GET':
        return render(request, 'new.html')
    elif request.method == 'POST':
        People(name=request.POST['name'],
               address=request.POST['address'],
               email=request.POST['email'],
               qq=request.POST['qq'],
               phone=request.POST['phone']).save()
        return render(request, 'contacts.html', {'people': People.objects.all()})


@login_required
def updateList(request):
    if request.method == 'GET':
        return render(request, 'updateList.html', {'person': People.objects.get(id=request.GET['id'])})
    elif request.method == 'POST':
        person = People.objects.get(id=request.POST['id'])
        person.name = request.POST['name']
        person.address = request.POST['address']
        person.email = request.POST['email']
        person.qq = request.POST['qq']
        person.phone = request.POST['phone']
        person.save()
        return render(request, 'contacts.html', {'people': People.objects.all()})


@login_required
def delList(request):
    People.objects.filter(id=request.GET['id']).delete()
    return render(request, 'contacts.html', {'people': People.objects.all()})


def _login(request):
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        error_msg = '密码错误'
        user = authenticate(username=request.POST['user'], password=request.POST['pswd'])
        if user and user.is_active:
            login(request, user)
            return redirect('/')
    return render(request, 'index.html', {'error_msg': error_msg})



@login_required
def _logout(request):
    logout(request)
    return redirect('/account/login')
