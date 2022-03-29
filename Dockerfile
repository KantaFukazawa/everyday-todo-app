FROM ruby:3.0.0

RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y postgresql-client --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /new-todo-app

ADD Gemfile /new-todo-app/Gemfile
ADD Gemfile.lock /new-todo-app/Gemfile.lock

RUN gem install bundler
RUN bundle install

ADD . /new-todo-app