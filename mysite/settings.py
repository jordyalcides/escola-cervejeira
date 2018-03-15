import os
from whitenoise import WhiteNoise

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOTDIR = os.path.dirname(__file__)

# Media folder

# For DEBUG = True use this:
# MEDIA_URL = 'media/'
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# For DEBUG = False use this:
MEDIA_URL = 'http://media.escolacervejeira.com.br/'
MEDIA_ROOT = '/home/escolacervejeira/www/media'
ADMIN_MEDIA_PREFIX = '/admin_media/'


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'z)@fj-%h-a(wv4*wn2p(^6_^yl9avhzu1p=uj)bxpvl__ty5e-'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
PREPEND_WWW = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1','escolacervejeira.com.br','www.escolacervejeira.com.br', 'media.escolacervejeira.com.br']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    'blog',
    'paginas',
    'ckeditor',
    'ckeditor_uploader',
    'geoposition',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'mysite.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['404.html'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'paginas.context_processors.contato',
            ],
        },
    },
]

WSGI_APPLICATION = 'mysite.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'jordy',
#         'USER': 'jordy',
#         'PASSWORD': '',
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'escolacervejeira',
        'USER': 'escolacervejeira',
        'PASSWORD': 'acensjr',
        'HOST': 'pgsql.escolacervejeira.com.br',
        'PORT': '5432',
    }
}



# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'pt-br'

TIME_ZONE = 'America/Sao_Paulo'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')


STATICFILES_DIRS = (
    # Put strings here, like "/home/html/static" or "C:/www/django/static".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    os.path.join(os.path.dirname(__file__), 'static'),
    )

# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)


GEOPOSITION_GOOGLE_MAPS_API_KEY = 'AIzaSyBlFrI6Y_WjMt52XCbBodMBJeKmPvwK36Q'
GEOPOSITION_MAP_OPTIONS = {
    'minZoom': 6,
    'maxZoom': 25,
    'zoom': 14,
    'clickable': True,
    'scrollwheel': False,
    'lat': -3.75572,
    'lng': -38.517394,
    'stylers': [
      { 'visibility': "on" }
    ],
}

GEOPOSITION_MARKER_OPTIONS = {
    'cursor': 'move',
    'clickable': True,
}

GEOPOSITION_MAP_WIDGET_HEIGHT = 720

# Email server settings

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
DEFAULT_FROM_EMAIL = 'testing@example.com'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'escolacervejeira.noreply@gmail.com'
EMAIL_HOST_PASSWORD = 'noreplycerveja00'
EMAIL_USE_TLS = True
EMAIL_PORT = 587


CKEDITOR_UPLOAD_PATH = "uploads/"
CKEDITOR_IMAGE_BACKEND = "pillow"
CKEDITOR_JQUERY_URL = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'

CKEDITOR_CONFIGS = {
    'awesome_ckeditor': {
        'toolbar': 'Custom',
        'toolbar_Custom': [
            ['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript'],
            ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
            ['Link', 'Unlink'],
            ['RemoveFormat', 'Source'],
            '/',
            {'name': 'insert',
             'items': ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar']},
            '/',
            {'name': 'styles', 'items': ['Styles', 'Format', 'Font', 'FontSize']},

        ],
        # 'toolbar_YourCustomToolbarConfig': [
        #     {'name': 'document', 'items': ['Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates']},
        #     {'name': 'clipboard', 'items': ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
        #     {'name': 'editing', 'items': ['Find', 'Replace', '-', 'SelectAll']},
        #     '/',
        #     {'name': 'basicstyles',
        #      'items': ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']},
        #     {'name': 'paragraph',
        #      'items': ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-',
        #                'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl',
        #                'Language']},
        #     {'name': 'links', 'items': ['Link', 'Unlink', 'Anchor']},
        #     {'name': 'insert',
        #      'items': ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe']},
        #     '/',
        #     {'name': 'styles', 'items': ['Styles', 'Format', 'Font', 'FontSize']},
        #     {'name': 'colors', 'items': ['TextColor', 'BGColor']},
        #     {'name': 'tools', 'items': ['Maximize', 'ShowBlocks']},
        #     {'name': 'about', 'items': ['About']},
        #     '/',  # put this to force next toolbar on new line
        #     {'name': 'yourcustomtools', 'items': [
        #         # put the name of your editor.ui.addButton here
        #         'Preview',
        #         'Maximize',

        #     ]},
        # ],
         'extraPlugins': ','.join([
            'uploadimage', # the upload image feature
            # your extra plugins here
            'div',
            'autolink',
            'autoembed',
            'embedsemantic',
            'autogrow',
            # 'devtools',
            'widget',
            'lineutils',
            'clipboard',
            'dialog',
            'dialogui',
            'elementspath'
        ]),
    },
}
