#
#####################
#
# Development stage
#
#####################
#

# Node 11 LTS on a Debian Stretch base
# Might use a slim base but we need to install extra build packages as of now
FROM node:11-stretch as devenv-stage

WORKDIR /build

# Install all packages
COPY package.json yarn.lock ./
RUN yarn install

ADD . /build/

RUN yarn build

#
#####################
#
# Deployment stage
#
#####################
#

# Install nginx-alpine image
FROM nginx:alpine

# copy nginx app conf to nginx
COPY docker/nginx/default /etc/nginx/conf.d/default.conf

WORKDIR /aerothon-ui
COPY docker/docker_start.sh .
COPY src/data/ ./www/data/
COPY --from=devenv-stage /build/dist/ ./www/

CMD ["/bin/sh", "/aerothon-ui/docker_start.sh"]
