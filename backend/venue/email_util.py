from django.core.mail import send_mail

SENDER_EMAIL = 'almir.handabaka@gmail.com'

# subject - email title
# message - email conntent
# to_who - array of emails
def send_new_mail(subject, message, to_who):
    send_mail(subject, message, SENDER_EMAIL, to_who, fail_silently=False)