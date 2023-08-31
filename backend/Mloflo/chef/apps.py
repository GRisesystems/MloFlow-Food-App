from django.apps import AppConfig


class ChefConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "Chef"

    def ready(self):
            import Chef.signals