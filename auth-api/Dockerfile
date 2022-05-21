FROM nixos/nix

RUN mkdir -p /opt/app
WORKDIR  /opt/app
ADD . ./opt/app

EXPOSE 3001

CMD nix-shell
