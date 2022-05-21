FROM nixos/nix

RUN mkdir -p /opt/app
WORKDIR  /opt/app
ADD . ./opt/app

EXPOSE 4000

CMD nix-shell