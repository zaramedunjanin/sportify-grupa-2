## Starting Django backend

To create a virtual environment, run this command in Django: <br> 
```
python -m venv venv
```
To install all neccessary packages, run this command in Django: <br> 
```
pip install -r requirements.txt
```
If you have installed new packages enter:
```
pip freeze 
```
into the Terminal, copy and paste the text into the requirements.txt file.
##### Database
1. Open pgAdmin
2. Create a Server if you don't have one already created
   - Host name/address: localhost
   - everything else is optional
3. Right click on Login/Group Role and create a new one
   - General -> Name: sportify
   - Definition -> Password: sportify
   - Privilages -> Can loging: ON
4. Create a Database in the Server 
   - Database: sportify
   - Owner: sportify

Go back to Django and run commands:
```
python manage.py makemigrations
python manage.py migrate
```
