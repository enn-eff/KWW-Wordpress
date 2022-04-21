FROM wordpress:5.9-php8.0

ENV XDEBUG_PORT 9000
ENV XDEBUG_IDEKEY docker

RUN pecl install "xdebug" \
    && docker-php-ext-enable xdebug

RUN echo "zend_extension=xdebug.so" >> /usr/local/etc/php/conf.d/xdebug.ini
RUN echo "xdebug.mode=debug" >> /usr/local/etc/php/conf.d/xdebug.ini
RUN echo "xdebug.discover_client_host=1" >> /usr/local/etc/php/conf.d/xdebug.ini
#RUN echo "xdebug.log=/dev/stdout" >> /usr/local/etc/php/conf.d/xdebug.ini
#RUN echo "xdebug.log_level=10" >> /usr/local/etc/php/conf.d/xdebug.ini
RUN echo "xdebug.idekey=${XDEBUG_IDEKEY}" >> /usr/local/etc/php/conf.d/xdebug.ini
