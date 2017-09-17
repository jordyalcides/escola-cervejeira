install:
	pip install -r requirements.txt

migrate:
	python manage.py migrate

wipe_db:
	rm -rf db.sqlite3

serve:
	python manage.py runserver

clean:
	find . -type f -name '*.pyc' -delete

