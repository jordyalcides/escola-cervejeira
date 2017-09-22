install:
	pip install https://github.com/philippbosch/django-geoposition/archive/django-1.11.zip
	pip install -r requirements.txt

migrations:
	python manage.py makemigrations

admin:
	python manage.py createsuperuser

migrate:
	python manage.py migrate

shell:
	python manage.py shell

wipe_db:
	rm -rf db.sqlite3

serve:
	python manage.py runserver

clean:
	find . -type f -name '*.pyc' -delete
