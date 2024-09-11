#!/bin/bash
cp /root/nginx.conf /etc/nginx/nginx.conf
service nginx restart &

if [ "$server" = "start" ]; then 
    export DJANGO_SETTINGS_MODULE=config.settings
    gunicorn config.wsgi:application \
    --limit-request-line 0 \
    --limit-request-fields 512 \
    --limit-request-field_size 32000 \
    --name ludwing2 \
    --workers 2 \
    --worker-class gthread  \
    --log-level=info \
    --log-file=- \
    --timeout 1800 \
    -b 0.0.0.0:3001
fi

if [ "$1" == 'bash' ]; then
    /bin/bash
fi

# workaround when nginx is not started tail -f /dev/null