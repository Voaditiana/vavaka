from django.shortcuts import render

def home(request):
    with open("verset.csv",newline="",encoding="utf-8") as f:
        data=f.read()
    return render(request,'index.html',{"versets":data})