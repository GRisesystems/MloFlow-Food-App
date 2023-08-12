from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


# Create your models here.

class UserAccountManager(BaseUserManager):
    def _create_user(self, email, first_name, surname, phone, home_address, password=None, **extra_fields):
        if not email:
            raise ValueError("Email must be provided")
        if not password:
            raise ValueError('Password is not provided')
        
        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
           
            email = email,
            first_name = first_name,
            surname = surname,
            phone = phone,
            home_address = home_address,
            **extra_fields
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user

        
        
    def create_user(self, email, first_name, surname, phone, home_address,password, **extra_fields):
        extra_fields.setdefault('is_staff',False)
        extra_fields.setdefault('is_active',True)
        extra_fields.setdefault('is_superuser',False)
        return self._create_user(email, first_name, surname, phone, home_address, password, **extra_fields)
    
    
    def create_superuser(self, email, first_name, surname, phone, home_address, password, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_active',True)
        extra_fields.setdefault('is_superuser',True)
        return self._create_user(email, first_name, surname, phone, home_address, password, **extra_fields)
       


class User(AbstractBaseUser, PermissionsMixin):
    
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    phone = PhoneNumberField(null=False, blank=False, unique=True)
    home_address = models.CharField(max_length=100)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
   
    
    objects = UserAccountManager()
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name","surname", "phone","home_address"]
    
    
    
    def __str__(self):
        return self.email

# Create your models here.
