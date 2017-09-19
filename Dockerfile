FROM httpd:2.4
# Create 'me' group whith gid 1000 and 'me' user in this group with uid 1000
RUN groupadd -f -g 1000070000 me && useradd -u 1000070000 -g me me

# Define apache listen port on a port greater than 1024 to allow a non-root user (me) to start apache
RUN sed -i 's/Listen\ 80/Listen\ 8080/g' /usr/local/apache2/conf/httpd.conf

# Allow apache to run with 'me' user
RUN chown -R me:me /usr/local/apache2/

# Start container as me
USER me

COPY ./dist/ /usr/local/apache2/htdocs/
