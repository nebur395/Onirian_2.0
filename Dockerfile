FROM ubuntu:18.04

LABEL maintainer="Guillermo Robles <guillerobles1995@gmail.com>"
LABEL description="Onirian's web page"

# Install and clean buildbase
RUN apt-get update -qq &&\
    apt-get install --no-install-recommends -y \
    ruby-bundler &&\
    apt-get clean autoclean && \
    apt-get autoremove && \
    rm -rf /var/lib/apt /var/lib/dpkg /var/lib/cache /var/lib/log

# Create app user and directory
ENV USER raices
RUN useradd -ms /bin/bash $USER
ENV APP_HOME /home/$USER/onirian
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# Install dependencies
COPY Gemfile Gemfile.lock $APP_HOME/
RUN bundle install

# Install application
COPY config.ru $APP_HOME/
# Considering that the app is mainly static files, we should put public/ in a volume, and remove it from here. Then, mount said volume in /$APP/public, and access the static files there.
COPY public/ $APP_HOME/public/

# Use the non-root user
RUN chown -R $USER $APP_HOME
USER $USER

# Ports and app command
EXPOSE 9292
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0"]
