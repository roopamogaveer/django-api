from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user.models import User

from user.serializers import UserSerializer

# Create your views here.
@api_view(["GET","POST","DELETE"])
def manageUser(request):
    if request.method == "GET":
        users = User.objects.all()
        response_user = UserSerializer(users, many = True)
        return Response(data=response_user.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        user = UserSerializer(data=request.data)

        if user.is_valid():
            user.save()
            return Response(user.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        email=request.headers["email"]
        user = User.objects.filter(email=email).first()
        user.delete()
        return Response(status=status.HTTP_200_OK)