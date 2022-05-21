{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs-16_x
    yarn
  ];

  shellHook = ''
    echo AUTH-API
  '';

  NODE_ENV = "development";
}
